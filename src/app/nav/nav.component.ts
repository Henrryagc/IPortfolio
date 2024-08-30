import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { NavCardDto } from './dto/nav-card.dto';
import { NavCardModel } from './class/nav-card.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent implements OnInit {

  items: NavCardDto[]

  constructor() {
    this.items = new NavCardModel().getNavCardItems()
  }

  ngOnInit(): void { }

}
