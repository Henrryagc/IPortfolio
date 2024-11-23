import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-school-library',
    templateUrl: './school-library.component.html',
    styleUrls: ['./school-library.component.scss'],
    standalone: false
})
export class SchoolLibraryComponent {

  miTexto = new FormControl<string>("");


  onChangeTExt(event: Event) {
    console.log(event);
  }

}
