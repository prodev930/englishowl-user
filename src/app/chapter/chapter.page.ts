import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Tutorial } from 'src/app/models/tutorial.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { testMark, userInfo, firevariable } from '../models/fireVariable';

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
  chapter_id = '';
  user = [];

  constructor(private totalMark: testMark,private userInfo: userInfo,private tutorialService: TutorialService, protected _sanitizer: DomSanitizer, private globals: firevariable, public router: Router) {
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
    this.tutorialService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      if(data && data.length > 0) {
        this.globals.currentChapter.subscribe(chapter_id => this.chapter_id = chapter_id);
        for(let i in data) {
          if(this.chapter_id == data[i]["chapter"]["name"]) {
            this.user.push(data[i]);
          }
        }
        if(this.user && this.user.length > 0) {
          for (var i in this.user) {
            this.chapter_text += this.user[i].chapterContent;
          }
          this.html = this._sanitizer.bypassSecurityTrustHtml(this.chapter_text);
        } else {
          this.user = [];
          this.html = this._sanitizer.bypassSecurityTrustHtml(`<p>No Data</p>`);
        }
      } else {
        this.user = [];
        this.html = this._sanitizer.bypassSecurityTrustHtml(`<p>No Data</p>`); 
      }
    });
  }
  signout() {
    this.userInfo.setEmail("");
    this.userInfo.setUser_id("");
    this.totalMark.setMark(0);
    this.router.navigate(['signin']);
  }
  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
}
