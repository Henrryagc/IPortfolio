import { Component } from '@angular/core';
import { fader } from './route-animation'
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    fader
  ]
})
export class AppComponent {

  // * TODO : https://angular.io/guide/standalone-components#lazy-loading-a-standalone-component

  title = 'iportfolio';


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
