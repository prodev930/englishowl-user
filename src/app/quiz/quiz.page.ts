import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { map } from 'rxjs/operators';
import { Tutorial } from 'src/app/models/tutorial.model';
import { quiztitle } from '../models/fireVariable';
import { Router } from '@angular/router';
import { testMark, userInfo } from '../models/fireVariable';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  tutorials?: Tutorial[];
  currentTutorial?: Tutorial;
  currentIndex = -1;
  Quiz_title = '';
  public totalData = [];
  public totalAnswer = [];
  count = 0;
  question = '';
  answer = {};
  right_array = [];
  isRight = [];
  isConfirm = false;
  isMark = 0;
  explanation = [];
  isSelect = false;
  defaultChoice = "";
  total_problem = 0;

  constructor(private tutorialService: TutorialService, private quiztilte: quiztitle, public router: Router, private totalMark: testMark, private userInfo: userInfo) { }

  ngOnInit(): void {
    this.init_gloablMark();
    this.isRight_init();
    this.retrieveTutorials();
    this.quizTitle();
    this.count = 0;
    this.total_problem = 0;
  }
  init_gloablMark(): void {
    this.totalMark.setMark(0);
    this.totalMark.setProblem(0);
  }
  isRight_init(): void {
    this.isMark = 0;
    for (let i = 0; i < 4; i++) {
      this.isRight[i + 1] = {
        flag: false
      }
    }
  }
  quizTitle(): void {
    this.quiztilte.currentQuiz.subscribe(quiztitle => this.Quiz_title = quiztitle);
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
      if (data && data.length > 0) {
        this.total_problem = data.length;
        this.totalMark.setProblem(this.total_problem);
        for (let i in data) {
          var random = [];
          for (var j = 0; j < 4; j++) {
            var temp = Math.floor(Math.random() * 4) + 1;
            if (random.indexOf(temp) == -1) {
              random.push(temp);
              if (temp == 1) {
                this.right_array.push(j);
              }
            }
            else
              j--;
          }
          this.totalData[i] = data[i].question;
          this.explanation[i] = data[i]["explanation"];
          this.totalAnswer[data[i].question] = {
            0: data[i][`answer${random[0]}`],
            1: data[i][`answer${random[1]}`],
            2: data[i][`answer${random[2]}`],
            3: data[i][`answer${random[3]}`]
          }
          if(i == '0') {
            this.question = this.totalData[0];
            this.answer = this.totalAnswer[this.question];
          }
        }
      }
    });
  }


  next(): void {
    if (this.isConfirm && this.isSelect) {
      this.isMark = 0;
      this.isConfirm = false;
      this.isSelect = false;
      this.count += 1;
      if (this.totalData && this.totalData.length > 0 && this.count < this.totalData.length) {
        this.question = this.totalData[this.count];
        this.answer = this.totalAnswer[this.question];
      } else {
        this.count = 0;
        this.router.navigate(['score']);
      }
    } else if(!this.isConfirm && this.isSelect) {
      this.isSelect = false;
    }
    this.defaultChoice = "";

  }

  confirm(): void {
    if (!this.isConfirm && this.isSelect) {
      this.isConfirm = true;
      if (this.isMark == 1) {
        this.totalMark.currentMark.subscribe(Mark => this.isMark += Mark);
        this.totalMark.setMark(this.isMark);
      }
      this.isMark = 0;
    }
  }

  isCheck(number): void {
    if (!this.isConfirm) {
      this.isRight_init();
      this.isSelect = true;
      if (number == this.right_array[this.count] + 1) {
        this.isRight[number] = { "flag": true };
        this.isMark = 1;
      } else {
        this.isRight[this.right_array[this.count] + 1] = { "flag": true };
        this.isMark = 0;
      }
    }
  }

  setActiveTutorial(tutorial: Tutorial, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
  handleChange(v) {
    this.defaultChoice = v;
  }
  signout() {
    this.userInfo.setEmail("");
    this.userInfo.setUser_id("");
    this.totalMark.setMark(0);
    this.router.navigate(['signin']);
  }
}
