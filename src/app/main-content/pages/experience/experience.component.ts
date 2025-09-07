import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MainContentHeaderComponent } from '../../components/main-content-header/main-content-header.component';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    imports: [
      MainContentHeaderComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ExperienceComponent {

  events = [
    {
      year: 'Present',
      title: 'BYTESW',
      description: 'Lead development and maintenance of banking applications utilizing microservices architecture. Assumed full project responsibility for microservices implementation after six months, managing requirements analysis, development coordination, and technical delivery. Advanced to team leadership role in second year, successfully coordinating multiple sprint cycles while ensuring adherence to quality standards and delivery timelines for critical financial sector applications.',
      icon: 'assets/icons/linkedin.png',
      tecnologies: ['Java', 'Python', 'Type Script', 'Angular', 'Spring Boot', 'Micronaut', 'Keycloak', 'MySQL', 'MariaDB', 'AWS', 'Jenkins', 'Docker', 'Kubernetes']
    },
    {
      year: '2021',
      title: 'Lavanderia Rosita',
      description: 'Designed and implemented comprehensive web application solution to digitize manual laundry operations previously managed through spreadsheets and physical records. Developed integrated system encompassing garment registration, inventory management, and financial administration modules, resulting in significant operational efficiency improvements and streamlined business processes.',
      icon: 'assets/icons/facebook.png',
      tecnologies: ['C#', 'ASP .NET','Entity Framework', 'Angular 11', 'Angular Material', 'MySQL', 'Git', 'GitHub', 'NAS Synology']
    }
  ];


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if('n' == event.key || 'N' == event.key) {
      console.log(event.key);
    }
    console.log(event);
  }

  calculateDelay(index: number): number {
    return index * 0.2;
  }
}