import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '', // iportfolio
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {    
        path: 'projects',
        component: ProjectsComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
