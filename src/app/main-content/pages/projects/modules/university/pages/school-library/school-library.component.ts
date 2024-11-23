import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-school-library',
    templateUrl: './school-library.component.html',
    styleUrls: ['./school-library.component.scss'],
    imports: [ReactiveFormsModule, NgIf]
})
export class SchoolLibraryComponent {

  miTexto = new FormControl<string>("");


  onChangeTExt(event: Event) {
    console.log(event);
  }

}
