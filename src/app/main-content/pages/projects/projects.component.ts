import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Pagination, Navigation } from "swiper/modules";
import SwiperCore from 'swiper';
import { SwiperOptions } from 'swiper/types';

import { MainContentHeaderComponent } from '../../components/main-content-header/main-content-header.component';

SwiperCore.use([Pagination, Navigation]);

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    encapsulation: ViewEncapsulation.None,
    imports: [MainContentHeaderComponent],
    standalone: true
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
      title: 'Lavanderia Rosita',
      description: 'Designed and implemented comprehensive web application solution to digitize manual laundry operations previously managed through spreadsheets and physical records. Developed integrated system encompassing garment registration, inventory management, and financial administration modules, resulting in significant operational efficiency improvements and streamlined business processes.',
      icon: 'assets/icons/facebook.png',
      tecnologies: ['C#', 'ASP .NET','Entity Framework', 'Angular 11', 'Angular Material', 'MySQL', 'Git', 'GitHub', 'NAS Synology']
    },
    {
      title: 'BYTESW',
      description: 'Lead development and maintenance of banking applications utilizing microservices architecture. Assumed full project responsibility for microservices implementation after six months, managing requirements analysis, development coordination, and technical delivery. Advanced to team leadership role in second year, successfully coordinating multiple sprint cycles while ensuring adherence to quality standards and delivery timelines for critical financial sector applications.',
      icon: 'assets/icons/linkedin.png',
      tecnologies: ['Java', 'Python', 'Type Script', 'Angular', 'Spring Boot', 'Micronaut', 'Keycloak', 'MySQL', 'MariaDB', 'AWS', 'Jenkins', 'Docker', 'Kubernetes']
    }
  ]

  ngOnInit(): void {
  }

  onSwiper([swiper]:any): void {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
