import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from 'swiper';
import { SwiperOptions } from 'swiper/types';

import { MainContentHeaderComponent } from '../../components/main-content-header/main-content-header.component';

SwiperCore.use([Pagination, Navigation]);

export const listAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      stagger('100ms', [
        animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [MainContentHeaderComponent],
  standalone: true,
  animations: [listAnimation]
})
export class ProjectsComponent implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  projects = [
    {
      title: 'BYTESW',
      description: 'Lead development and maintenance of banking applications utilizing microservices architecture. Assumed full project responsibility for microservices implementation after six months, managing requirements analysis, development coordination, and technical delivery. Advanced to team leadership role in second year, successfully coordinating multiple sprint cycles while ensuring adherence to quality standards and delivery timelines for critical financial sector applications.',
      figure: 'assets/imgs/ia.jpg',
      tecnologies: ['Java', 'Python', 'Type Script', 'Angular', 'Spring Boot', 'Micronaut', 'Keycloak', 'MySQL', 'MariaDB', 'AWS', 'Jenkins', 'Docker', 'Kubernetes']
    },
    {
      title: 'Lavanderia Rosita',
      description: 'Designed and implemented comprehensive web application solution to digitize manual laundry operations previously managed through spreadsheets and physical records. Developed integrated system encompassing garment registration, inventory management, and financial administration modules, resulting in significant operational efficiency improvements and streamlined business processes.',
      figure: 'assets/imgs/garou.webp',
      tecnologies: ['C#', 'ASP .NET', 'Entity Framework', 'Angular 11', 'Angular Material', 'MySQL', 'Git', 'GitHub', 'NAS Synology']
    }
  ]

  ngOnInit(): void {
  }

  onSwiper([swiper]: any): void {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
