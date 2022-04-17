import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isTrue = true;

  constructor() { }

  ngOnInit(): void {
    // this.underscore()
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