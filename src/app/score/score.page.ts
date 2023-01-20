import { Component, OnInit, Input } from '@angular/core';
import { testMark } from '../models/fireVariable';
import { Chapter } from '../models/tutorial.model';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { firevariable, userInfo, quiztitle } from '../models/fireVariable';
import { TutorialService } from 'src/app/services/tutorial.service';

import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {

  message = '';
  chapters?: Chapter[];
  users?: User[];
  public userData = [];
  mark = 0;
  problem = 0;
  percent = 0;
  user_email = '';
  chapter_status = 1;
  chapter_id = '';
  public chartOptions: Partial<ChartOptions>;
  constructor(private tutorialService: TutorialService, public testMark: testMark, private totalMark: testMark, public router: Router, private userService: UserService, private userInfo: userInfo, private Global: firevariable) { }

  ngOnInit() {
    this.per_calculator();
   
  }
  display_chart(): void {
    this.chartOptions = {
      series: [this.percent],
      chart: {
        height: 350,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "65%"
          }
        }
      },
      labels: [`${this.percent}%`]
    };
    this.nextChapter();
  }
  per_calculator(): void {
    this.testMark.currentMark.subscribe(mark => this.mark = mark);
    this.testMark.currentProblem.subscribe(problem => this.problem = problem);

    if (this.problem > 0) {
      this.percent = Math.floor((this.mark / this.problem) * 100);
    } else {
      this.percent = 0;
    }
    this.display_chart();
  }
  nextChapter() {
    if (this.percent >= 90) {
      this.userInfo.currentChapter_status.subscribe(status => this.chapter_status = status);
      this.userInfo.currentEmail.subscribe(email => this.user_email = email);
      this.Global.currentChapter.subscribe(chapter_id => this.chapter_id = chapter_id);

      if (this.user_email != '') {
        if (this.chapter_id != '') {
          var id = this.chapter_id.split(" ")[1];
          if (this.chapter_status == Number(id)) {
            this.userInfo.setchapter_status(this.chapter_status + 1);
          }
        }
      }
    }
  }
  signout() {
    this.totalMark.setMark(0);
    this.router.navigate(['signin']);
  }
}
