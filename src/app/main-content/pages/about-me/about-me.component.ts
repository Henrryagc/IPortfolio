import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MainContentHeaderComponent } from '../../components/main-content-header/main-content-header.component';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.scss'],
    imports: [
      MainContentHeaderComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
