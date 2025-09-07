
import { ChangeDetectionStrategy, ChangeDetectorRef, Inject } from '@angular/core';
import { Component, type OnInit } from '@angular/core';
import { NavCardDto } from './dto/nav-card.dto';
import { NavCardModel } from './class/nav-card.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-nav',
    imports: [
        CommonModule, RouterModule
    ],
    templateUrl: './nav.component.html',
    styleUrl: './nav.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class NavComponent implements OnInit {

  items: NavCardDto[]
  name: string = ""

  constructor() {
    this.items = new NavCardModel().getNavCardItems()
  }

  ngOnInit(): void { }

}
