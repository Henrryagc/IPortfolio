import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isTrue = true;

  items = [1,2,3,4,5,6,4,8,5,4,1,2,4,5];

  constructor(private route: Router) { }

  ngOnInit(): void {
    // this.underscore()
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if('n' == event.key || 'N' == event.key) {
      this.route.navigateByUrl("projects");
      console.log(event.key);
    }
    console.log(event);
  }

  /*underscore() {

    let isVisibleUnderScore = true;
    const underscore = document.getElementById("underscore")

    window.setInterval(function() {

      if (isVisibleUnderScore) {
        isVisibleUnderScore = false
        underscore!.className = 'console-underscore hidden'
      }
       else {
        underscore!.className = 'console-underscore'
        isVisibleUnderScore = true
       }
       // console.log(isVisibleUnderScore)
    }, 400)
  }*/

}