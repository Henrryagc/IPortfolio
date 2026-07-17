import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { MainContentHeaderComponent } from '../../components/main-content-header/main-content-header.component';
import { ProjectItem } from './project.model';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [MainContentHeaderComponent, TranslatePipe, NgClass, ProjectDetailsComponent],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true
})
export class ProjectsComponent implements OnInit {

  activeFilter: string = 'all';
  selectedProject: ProjectItem | null = null;

  categories = ['all', 'fullstack', 'frontend', 'backend', 'desktop'];

  projects: ProjectItem[] = [
    {
      id: 'kipuview',
      category: 'desktop',
      tecnologies: ['Tauri v2', 'Rust', 'Angular 22', 'TypeScript', 'Signals', 'SCSS', 'Bun', 'Vitest'],
      github: 'https://github.com/ihenrryagc/KipuView',
      demo: 'https://kipuview.web.app',
      images: [
        { url: 'assets/imgs/projects/kipuview/cover.webp', captionKey: 'PROJECTS.ITEMS.kipuview.features[0]' },
        { url: 'assets/imgs/projects/kipuview/screenshot-1.webp', captionKey: 'PROJECTS.ITEMS.kipuview.features[1]' },
        { url: 'assets/imgs/projects/kipuview/screenshot-2.webp', captionKey: 'PROJECTS.ITEMS.kipuview.features[2]' },
        { url: 'assets/imgs/projects/kipuview/screenshot-3.webp', captionKey: 'PROJECTS.ITEMS.kipuview.features[3]' }
      ]
    },
    {
      id: 'gelatopos',
      category: 'fullstack',
      tecnologies: ['Angular 20', 'Flask', 'Python', 'SQLAlchemy', 'MySQL', 'Docker', 'Apache ECharts', 'jsPDF'],
      github: 'https://github.com/ihenrryagc/GelatoPOS',
      demo: 'https://gelatopos.web.app',
      images: [
        { url: 'assets/imgs/projects/gelatopos/cover.webp', captionKey: 'PROJECTS.ITEMS.gelatopos.features[0]' },
        { url: 'assets/imgs/projects/gelatopos/screenshot-1.webp', captionKey: 'PROJECTS.ITEMS.gelatopos.features[1]' },
        { url: 'assets/imgs/projects/gelatopos/screenshot-2.webp', captionKey: 'PROJECTS.ITEMS.gelatopos.features[2]' },
        { url: 'assets/imgs/projects/gelatopos.webp', captionKey: 'PROJECTS.ITEMS.gelatopos.features[3]' }
      ]
    },
    {
      id: 'applaundry',
      category: 'fullstack',
      tecnologies: ['Angular 20', '.NET 9.0', 'C#', 'EF Core', 'MariaDB', 'Docker', 'Cloudflare Tunnels', 'ClosedXML'],
      github: 'https://github.com/ihenrryagc/AppLaundry',
      demo: 'https://applaundry.web.app',
      images: [
        { url: 'assets/imgs/projects/applaundry/cover.webp', captionKey: 'PROJECTS.ITEMS.applaundry.features[0]' },
        { url: 'assets/imgs/projects/applaundry/screenshot-1.webp', captionKey: 'PROJECTS.ITEMS.applaundry.features[1]' },
        { url: 'assets/imgs/projects/applaundry/screenshot-2.webp', captionKey: 'PROJECTS.ITEMS.applaundry.features[2]' },
        { url: 'assets/imgs/projects/applaundry/screenshot-3.webp', captionKey: 'PROJECTS.ITEMS.applaundry.features[3]' }
      ]
    },
    {
      id: 'bytesw',
      category: 'backend',
      tecnologies: ['Java', 'Spring Boot', 'Micronaut', 'Keycloak', 'MySQL', 'AWS', 'Docker', 'Kubernetes', 'Jenkins'],
      github: 'https://github.com/ihenrryagc/BYTESW',
      demo: 'https://bytesw-banking.web.app',
      images: [
        { url: 'assets/imgs/projects/bytesw/cover.webp', captionKey: 'PROJECTS.ITEMS.bytesw.features[0]' },
        { url: 'assets/imgs/projects/bytesw/screenshot-1.webp', captionKey: 'PROJECTS.ITEMS.bytesw.features[1]' },
        { url: 'assets/imgs/projects/bytesw/screenshot-2.webp', captionKey: 'PROJECTS.ITEMS.bytesw.features[2]' },
        { url: 'assets/imgs/projects/bytesw/screenshot-3.webp', captionKey: 'PROJECTS.ITEMS.bytesw.features[3]' }
      ]
    }
  ];

  ngOnInit(): void {}

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  getFilteredProjects(): ProjectItem[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  openDetail(project: ProjectItem): void {
    this.selectedProject = project;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeDetail(): void {
    this.selectedProject = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

