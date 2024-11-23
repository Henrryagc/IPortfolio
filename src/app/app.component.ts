import { Component } from '@angular/core';
import { fader } from './route-animation'
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        fader
    ],
    imports: [HeaderComponent, ProfileComponent, MainContentComponent, NavComponent, FooterComponent],
})
export class AppComponent {

  // * TODO : https://angular.io/guide/standalone-components#lazy-loading-a-standalone-component

  title = 'iportfolio';


  /*prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }*/

}
