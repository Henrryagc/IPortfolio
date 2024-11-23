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

socialMediaItems = [
  {
    'url': '',
    'icon': 'bx bxs-facebook '
  },
  {
    'url': '',
    'icon': 'bx bxs-facebook '
  },
  {
    'url': '',
    'icon': 'bx bxs-facebook '
  },
  {
    'url': '',
    'icon': 'bx bxs-facebook '
  }
]

informationItems = [
  {
    'icon':'bx phone',
    'title': 'Phone',
    'information': '+51 999999',
    'type': 'phone'
  },
  {
    'icon':'bx phone',
    'title': 'Phone',
    'information': 'dends@gmail.com',
    'type': 'email'
  },
  {
    'icon':'bx phone',
    'title': 'Phone',
    'information': 'dasd@gmail.com',
    'type': 'email'
  },
  {
    'icon':'bx phone',
    'title': 'Phone',
    'information': 'test@gmail.com',
    'type': 'email'
  }
]
  ngOnInit(): void { }

}
