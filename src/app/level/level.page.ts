import { Component } from '@angular/core';
import { Router } from '@angular/router';


import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { testMark } from '../models/fireVariable';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-level',
  templateUrl: './level.page.html',
  styleUrls: ['./level.page.scss']
})
export class LevelPage {
  constructor(private totalMark: testMark, public router: Router) {

  }
  ngOnInit() {
  }
  signout() {
    this.totalMark.setMark(0);
    this.router.navigate(['signin']);
  }
}
