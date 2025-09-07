import { Component } from '@angular/core';
import { MainContentHeaderComponent } from '../../components/main-content-header/main-content-header.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-certifications',
    templateUrl: './certifications.component.html',
    styleUrls: ['./certifications.component.scss'],
    imports: [
      MainContentHeaderComponent,
      CommonModule
    ],
    standalone: true
})
export class CertificationsComponent {

  fullscreenImage: string | null = null;

  certifications = [
    {
      image: 'assets/certs/angular_19_2025_henrryagc.png',
      link: 'assets/certs/angular_19_2025_henrryagc.png',
      title: 'Angular19',
      institute: 'DevTalles',
      validationUrl: 'https://devtalles.com/certificates/be7a6037-a7dd-4225-9579-466ab1a56189'
    },
    {
      image: 'assets/certs/arte_spring_boot_henrryagc.png',
      link: 'assets/certs/arte_spring_boot_henrryagc.png',
      title: 'Spring Boot',
      institute: 'Udemy',
      validationUrl: 'https://www.udemy.com/certificate/UC-CERT-NUMBER/'
    },
  ];

  fullscreen(image: string): void {
    this.fullscreenImage = image;
  }

  closeFullscreen(): void {
    this.fullscreenImage = null;
  }
}
