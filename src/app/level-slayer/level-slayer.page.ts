import { Component, OnInit } from '@angular/core';
import { Tutorial, Chapter } from '../models/tutorial.model';
import { TutorialService } from '../services/tutorial.service';
import { firevariable } from '../models/fireVariable';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-level-slayer',
  templateUrl: './level-slayer.page.html',
  styleUrls: ['./level-slayer.page.scss'],
})
export class LevelSlayerPage implements OnInit {

  chapters?: Chapter[];
  tutorials?: Tutorial[];
  users?: User[];
  constructor(public tutorialService: TutorialService, private globals: firevariable, private userService: UserService) { }

  ngOnInit() {
    this.chapter_array();
    this.retrieveUsers();
  }

  chapter_array() {
    this.chapters = []
    for (let i = 18; i < 27; i++) {
      this.chapters.push({
        id: i + 1,
        chaptername: `Chapter ${i + 1}`
      })
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
      console.log(this.users);
    });
  }

  retrieveTutorials(val): void {
    this.globals.setChapter(`${val}`, "");
    this.tutorialService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {

      for (var i = 0; i < data.length; i++) {
        if (`${val}` == JSON.parse(JSON.stringify(data[i].chapter)).name) {
          this.globals.setChapter(JSON.parse(JSON.stringify(data[i].chapter)).name, data[i].chapterContent);
        } else {
          console.log("false")
        }
      }
      this.tutorials = data;
    });
  }


}
