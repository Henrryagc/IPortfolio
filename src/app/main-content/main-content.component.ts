import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContentComponent implements OnInit {

  ngOnInit(): void { }
  def() {
    console.log("")
  }
}
