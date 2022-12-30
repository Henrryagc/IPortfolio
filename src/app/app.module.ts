import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BottomnavComponent } from './bottomnav/bottomnav.component';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ProjectsComponent,
    HeaderComponent,
    SidenavComponent,
    ContactComponent,
    HomeComponent,
    BottomnavComponent
  ],
  imports: [
    BrowserModule,        
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    LottieModule.forRoot({
      player: playerFactory      
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
