import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-main-content-header',
  imports: [],
  templateUrl: './main-content-header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './main-content-header.component.scss'
})
export class MainContentHeaderComponent {
  @Input() title?: string = "";
}
