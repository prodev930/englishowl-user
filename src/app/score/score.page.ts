import { Component, OnInit } from '@angular/core';
import { testMark } from '../models/fireVariable';


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
  mark = 0;
  problem = 0;
  percent = 0;
  public chartOptions: Partial<ChartOptions>;
  constructor(public testMark: testMark) {}

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
  }

  per_calculator(): void {
    this.testMark.currentMark.subscribe(mark => this.mark = mark);
    this.testMark.currentProblem.subscribe(problem => this.problem = problem);
    console.log(this.problem, this.mark);
    if(this.problem > 0) {
      this.percent = Math.floor((this.mark/this.problem)*100);
    }else {
      this.percent = 0;
    }
    this.display_chart();
  }

}
