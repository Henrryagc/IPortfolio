import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MainContentHeaderComponent } from '../../components/main-content-header/main-content-header.component';

@Component({
    selector: 'app-certifications',
    templateUrl: './certifications.component.html',
    styleUrls: ['./certifications.component.scss'],
    imports: [
      MainContentHeaderComponent
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class CertificationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
