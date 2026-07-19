import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { MainContentHeaderComponent } from '../../components/main-content-header/main-content-header.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [
    MainContentHeaderComponent,
    TranslatePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class ExperienceComponent {

  events = [
    {
      year: 'EXPERIENCE.ITEMS.bytesw.year',
      title: 'EXPERIENCE.ITEMS.bytesw.title',
      description: 'EXPERIENCE.ITEMS.bytesw.description',
      icon: 'assets/icons/linkedin.png',
      tecnologies: ['Java', 'Spring Boot', 'Micronaut', 'Keycloak', 'MySQL', 'MariaDB', 'AWS EKS', 'Jenkins', 'Docker', 'Kubernetes']
    },
    {
      year: 'EXPERIENCE.ITEMS.gelatopos.year',
      title: 'EXPERIENCE.ITEMS.gelatopos.title',
      description: 'EXPERIENCE.ITEMS.gelatopos.description',
      icon: 'assets/icons/facebook.png',
      tecnologies: ['Python', 'Flask', 'Angular', 'SQLAlchemy', 'MySQL', 'Docker', 'Apache ECharts', 'Day.js']
    },
    {
      year: 'EXPERIENCE.ITEMS.applaundry.year',
      title: 'EXPERIENCE.ITEMS.applaundry.title',
      description: 'EXPERIENCE.ITEMS.applaundry.description',
      icon: 'assets/icons/facebook.png',
      tecnologies: ['C#', 'ASP.NET', 'Entity Framework', 'Angular', 'MariaDB', 'Synology NAS', 'Cloudflare Tunnels', 'ClosedXML']
    }
  ];


  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if ('n' == event.key || 'N' == event.key) {
      console.log(event.key);
    }
    console.log(event);
  }

  calculateDelay(index: number): number {
    return index * 0.2;
  }
}