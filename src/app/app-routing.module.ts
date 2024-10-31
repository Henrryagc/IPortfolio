import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './main-content/pages/about-me/about-me.component';
import { ContactComponent } from './main-content/pages/contact/contact.component';
import { HomeComponent } from './main-content/pages/home/home.component';
import { ProjectsComponent } from './main-content/pages/projects/projects.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', // iportfolio
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          // animation: 'isRight'
        }
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          // animation: 'isRight'
        },
        children: [
          { path: 'university', loadChildren: () => import('./main-content/pages/projects/modules/university/university.module').then(m => m.UniversityModule) },
          { path: 'personal', loadChildren: () => import('./main-content/pages/projects/modules/personal/personal.module').then(m => m.PersonalModule) },
        ]
      },
      {
        path: 'about-me',
        component: AboutMeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
