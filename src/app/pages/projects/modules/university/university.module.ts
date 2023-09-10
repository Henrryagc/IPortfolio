import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityRoutingModule } from './university-routing.module';
import { UniversityComponent } from './university.component';
import { SchoolLibraryComponent } from './pages/school-library/school-library.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UniversityComponent,
    SchoolLibraryComponent
  ],
  imports: [
    CommonModule,
    UniversityRoutingModule,
    ReactiveFormsModule
  ]
})
export class UniversityModule { }
