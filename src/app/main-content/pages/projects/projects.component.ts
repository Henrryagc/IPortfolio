import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { Pagination, SwiperOptions, Navigation } from "swiper";
import { NgFor } from '@angular/common';
import { MainContentHeaderComponent } from '../../components/main-content-header/main-content-header.component';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [NgFor, MainContentHeaderComponent],
    standalone: true
})
export class ProjectsComponent implements OnInit {

  items = ["Algo", "algo2", "Algo3", "Algo3", "Algo3", "Algo3", "Algo3"]
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper([swiper]:any): void {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
