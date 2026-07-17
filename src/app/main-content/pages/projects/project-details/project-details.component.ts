import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectItem } from '../project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [TranslatePipe],
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: true
})
export class ProjectDetailsComponent {
  @Input({ required: true }) project!: ProjectItem;
  @Output() back = new EventEmitter<void>();

  readonly techIconMap: Record<string, string> = {
    'Angular 20':       'devicon-angularjs-plain',
    'Angular 22':       'devicon-angularjs-plain',
    'TypeScript':       'devicon-typescript-plain',
    'JavaScript':       'devicon-javascript-plain',
    'Rust':             'devicon-rust-plain',
    'Python':           'devicon-python-plain',
    'Java':             'devicon-java-plain',
    'C#':               'devicon-csharp-plain',
    'Flask':            'devicon-flask-original',
    '.NET 9.0':         'devicon-dotnetcore-plain',
    'Spring Boot':      'devicon-spring-plain',
    'MySQL':            'devicon-mysql-plain',
    'MariaDB':          'devicon-mariadb-plain',
    'Docker':           'devicon-docker-plain',
    'Kubernetes':       'devicon-kubernetes-plain',
    'AWS':              'devicon-amazonwebservices-plain',
    'Jenkins':          'devicon-jenkins-plain',
    'SCSS':             'devicon-sass-plain',
    'Bun':              'devicon-bun-plain',
    'Vitest':           'devicon-vitest-plain',
    // Technologies with no reliable devicon are intentionally omitted
    // so the tag renders cleanly as text-only
  };

  getTechIcon(tag: string): string {
    return this.techIconMap[tag] ?? '';
  }

  onBack(): void {
    this.back.emit();
  }
}
