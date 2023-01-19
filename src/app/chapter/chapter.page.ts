import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { map } from 'rxjs/operators';
import { Tutorial } from 'src/app/models/tutorial.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { firevariable } from '../models/fireVariable';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.page.html',
  styleUrls: ['./chapter.page.scss'],
})


export class ChapterPage implements OnInit {
  tutorials?: Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  title = '';
  chapter_text = "";
  chapter_title = "";
  html: SafeHtml;

  constructor(private tutorialService: TutorialService, protected _sanitizer: DomSanitizer, private globals: firevariable) { 
    this.globals.currentChapter.subscribe(chapter => this.chapter_title = chapter);
    this.globals.currentChapterContent.subscribe(chapterContent => this.html = this._sanitizer.bypassSecurityTrustHtml(chapterContent));
  }

  ngOnInit(): void {
    this.retrieveTutorials();
  }
  
  refreshList(): void {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    // this.tutorialService.getAll().snapshotChanges().pipe(
    //   map(changes =>
    //     changes.map(c =>
    //       ({ id: c.payload.key, ...c.payload.val() })
    //     )
    //   )
    // ).subscribe(data => {
    //   this.tutorials = data;

    //   for (var i in data) {
    //     this.chapter_text += data[i].chapterContent;
    //   }
    //   this.html = this._sanitizer.bypassSecurityTrustHtml(this.chapter_text);
    //   console.log(this.html);
    // });
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
}
