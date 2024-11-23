import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SwiperModule } from 'swiper/angular';

import { AboutMeComponent } from './main-content/pages/about-me/about-me.component';
import { ProjectsComponent } from './main-content/pages/projects/projects.component';
import { ContactComponent } from './main-content/pages/contact/contact.component';
import { HomeComponent } from './main-content/pages/home/home.component';
import { PersonalModule } from './main-content/pages/projects/modules/personal/personal.module';
import { MainContentComponent } from './main-content/main-content.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        SwiperModule,
        PersonalModule,
        ProfileComponent,
        MainContentComponent,
        NavComponent,
        HeaderComponent,
        FooterComponent,
        AboutMeComponent,
        ProjectsComponent,
        ContactComponent,
        HomeComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
