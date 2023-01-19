import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable()
export class firevariable {
//    public Chapter?:string = "Chapter";

   private Chapter = new BehaviorSubject<string>("Chapter 1");
    currentChapter = this.Chapter.asObservable();
    private ChapterContent = new BehaviorSubject<string>("");
    currentChapterContent = this.ChapterContent.asObservable();
    constructor() { }
    setChapter(Chapter: string, ChapterContent:string) {
        this.Chapter.next(Chapter);
        this.ChapterContent.next(ChapterContent);
    }
}

export class userInfo {
    private email = new BehaviorSubject<string>("");
    currentEmail = this.email.asObservable();
    constructor() { }
    setEmail(Email: string) {
        this.email.next(Email);
    }
}