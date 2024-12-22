import { ChangeDetectionStrategy, Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class ExperienceComponent implements OnInit {

  isTrue = true;

  items = [1,2,3,4,5,6,4,8,5,4,1,2,4,5];

  events = [
    {
      year: '2002',
      title: 'LinkedIn',
      description: 'A business- and employment-oriented social networking service.',
      icon: 'assets/icons/linkedin.png',
    },
    {
      year: '2004',
      title: 'Facebook',
      description: 'An online social media and social networking service.',
      icon: 'assets/icons/facebook.png',
    },
    {
      year: '2005',
      title: 'YouTube',
      description: 'First large-scale video sharing website.',
      icon: 'assets/icons/youtube.png',
    },
    {
      year: '2006',
      title: 'Twitter',
      description: 'A service for quick, frequent messages.',
      icon: 'assets/icons/twitter.png',
    },
    {
      year: '2007',
      title: 'Tumblr',
      description: 'Lets you effortlessly share anything.',
      icon: 'assets/icons/tumblr.png',
    },
    {
      year: '2010',
      title: 'Instagram',
      description: 'The home for visual storytelling.',
      icon: 'assets/icons/instagram.png',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    // this.underscore()
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if('n' == event.key || 'N' == event.key) {
      // this.route.navigateByUrl("projects");
      console.log(event.key);
    }
    console.log(event);
  }

  calculateDelay(index: number): number {
    return index * 0.2; // Cada elemento se retrasa 0.2 segundos más que el anterior
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