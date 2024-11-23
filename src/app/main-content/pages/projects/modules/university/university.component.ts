import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { SchoolLibraryComponent } from './pages/school-library/school-library.component';

@Component({
    selector: 'app-university',
    templateUrl: './university.component.html',
    styleUrls: ['./university.component.scss'],
    imports: [SchoolLibraryComponent]
})
export class UniversityComponent implements OnInit, AfterViewInit {


  constructor() {

  }

  ngOnInit(): void {}

  ngAfterViewInit() {

  }


}
