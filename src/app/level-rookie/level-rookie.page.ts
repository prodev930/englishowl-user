import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial.model';
import { TutorialService } from '../services/tutorial.service';
import { firevariable} from '../models/fireVariable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-level-rookie',
  templateUrl: './level-rookie.page.html',
  styleUrls: ['./level-rookie.page.scss'],
})
export class LevelRookiePage implements OnInit {

  tutorials?: Tutorial[];
  constructor(public tutorialService: TutorialService, private globals: firevariable) { }

  ngOnInit() {
  }

  retrieveTutorials(val): void {
    this.globals.setChapter(val, "");
    this.tutorialService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {

     for(var i=0; i<data.length; i++){
      if(val==JSON.parse(JSON.stringify(data[i].chapter)).name){
        this.globals.setChapter(JSON.parse(JSON.stringify(data[i].chapter)).name, data[i].chapterContent);
      }else{
        console.log("false")
      }
     }
      this.tutorials = data;
    });
  }


}
