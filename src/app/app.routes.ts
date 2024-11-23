import { Routes } from '@angular/router';
import { AboutMeComponent } from './main-content/pages/about-me/about-me.component';
import { ContactComponent } from './main-content/pages/contact/contact.component';
import { HomeComponent } from './main-content/pages/home/home.component';
import { ProjectsComponent } from './main-content/pages/projects/projects.component';

export const routes: Routes = [
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

/*
export const routes: Routes = [
    {
        path: 'login',
        title: 'Iniciar',
        loadComponent: () => import("./pages/login/login.component").then(c => c.LoginComponent)
    },
    {
        path: 'sales-icecream',
        title: 'Ventas',
        loadComponent: () => import("./pages/sales-icecream/sales-icecream.component").then(c => c.SalesIcecreamComponent)
    },
    { path: '',   redirectTo: 'sales-icecream', pathMatch: 'full' },
    { path: '**', redirectTo: 'sales-icecream'},
    // { path: '**', component: PageNotFoundComponent },
];
*/