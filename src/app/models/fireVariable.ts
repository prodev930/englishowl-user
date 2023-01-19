import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
@Injectable()
export class firevariable {
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

export class quiztitle {
    private quiz = new BehaviorSubject<string>("");
    currentQuiz = this.quiz.asObservable();
    constructor() { }
    setQuiz(quiz: string) {
        this.quiz.next(quiz);
    }
}

export class testMark {
    private mark = new BehaviorSubject<number>(0);
    currentMark = this.mark.asObservable();
    constructor() { }
    setMark(mark: number) {
        this.mark.next(mark);
    }
}