import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    imports: [
        CommonModule,
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ProfileComponent implements OnInit {
private pathIcons = './assets/icons/';
private pathProfileIcons = './assets/icons/profile/';
socialMediaItems = [
  {
    'url': '',
    'icon': this.pathIcons + 'iconfinder_github_icon.svg'
  },
  {
    'url': '',
    'icon': this.pathIcons + 'iconfinder_linkedin_icon.svg'
  },
  {
    'url': '',
    'icon': this.pathIcons + 'iconfinder_phone_icon.svg'
  },
  {
    'url': '',
    'icon': this.pathIcons + 'iconfinder_gmail_icon.svg'
  }
]

informationItems = [
  {
    'icon': this.pathProfileIcons + 'java_icon.svg',
    'title': 'Java'
  },
  {
    'icon': this.pathProfileIcons + 'angular_icon.svg',
    'title': 'Angular'
  },
  {
    'icon': this.pathProfileIcons + 'typescript_icon.svg',
    'title': 'Typescript'
  },
  {
    'icon': this.pathProfileIcons + 'html_icon.svg',
    'title': 'HTML'
  },
  {
    'icon': this.pathProfileIcons + 'css_icon.svg',
    'title': 'CSS'
  },
  {
    'icon': this.pathProfileIcons + 'bootstrap_icon.svg',
    'title': 'Bootstrap'
  },
  {
    'icon': this.pathProfileIcons + 'git_icon.svg',
    'title': 'Git'
  },
]
  ngOnInit(): void { }

}
