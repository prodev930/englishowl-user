import { Component, OnInit } from '@angular/core';
import { Tutorial,Chapter } from '../models/tutorial.model';
import { TutorialService } from '../services/tutorial.service';
import { firevariable, userInfo, quiztitle} from '../models/fireVariable';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-level-rookie',
  templateUrl: './level-rookie.page.html',
  styleUrls: ['./level-rookie.page.scss'],
})
export class LevelRookiePage implements OnInit {

  chapters?:Chapter[];
  tutorials?: Tutorial[];
  users?: User[];
  user_email = '';
  constructor(public tutorialService: TutorialService, private globals: firevariable,private userInfo : userInfo, private userService: UserService, private quiztitle : quiztitle) { }

  ngOnInit() {
    this.chapter_array();
    this.retrieveUsers();
  }
  chapter_array () {
    this.chapters = []
    for(let i =0; i<9; i++) {
      if(i==0) {
        this.chapters.push({
          id: i+1,
          chaptername: `Chapter ${i+1}`,
          lockstatus:true
        })
      } else {
        this.chapters.push({
          id: i+1,
          chaptername: `Chapter ${i+1}`,
          lockstatus:false
        })
      }
    }
  }

  retrieveUsers(): void {
    this.userService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.users = data;
      this.userInfo.currentEmail.subscribe(email => this.user_email = email)
      if(this.users && this.users.length > 0) {
        for (let i in this.users) {
          if(this.users[i].email == this.user_email) {
            for (let j in this.chapters) {
              if(this.users[i].chapter_status >= this.chapters[j].id) {
                this.chapters[j].lockstatus = true;
              }
            }
            break;
          }
        }
      }
      console.log(this.users);
    });
  }


  retrieveTutorials(val): void {
    this.globals.setChapter(`Chapter ${val}`, "");
    this.quiztitle.setQuiz(`Quiz ${val}`);
    this.tutorialService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      var chapter_text = '';
     for(var i=0; i<data.length; i++){
      if(`Chapter ${val}`==JSON.parse(JSON.stringify(data[i].chapter)).name){
        chapter_text += data[i].chapterContent;
        this.globals.setChapter(JSON.parse(JSON.stringify(data[i].chapter)).name,  chapter_text);
      }
     }
      this.tutorials = data;
    });
  }


}
