import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isTrue = true;

  constructor(private route: Router) { }

  ngOnInit(): void {
    // this.underscore()
  }

  options: AnimationOptions = {
    path: '/assets/lottie/programming-computer.json',
    autoplay: true,
    loop: true
  }
  options2: AnimationOptions = {
    path: 'https://assets5.lottiefiles.com/packages/lf20_rnfwc4vj.json'
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
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