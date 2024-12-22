import { Routes } from '@angular/router';
import { AboutMeComponent } from './main-content/pages/about-me/about-me.component';
import { CertificationsComponent } from './main-content/pages/certifications/certifications.component';
import { ExperienceComponent } from './main-content/pages/experience/experience.component';
import { ProjectsComponent } from './main-content/pages/projects/projects.component';

export const routes: Routes = [
  {
    path: '', // iportfolio
    children: [
      {
        path: 'about-me',
        title: 'Henry Gutierrez',
        component: AboutMeComponent
      },
      {
        path: 'experience',
        component: ExperienceComponent,
        data: {
          // animation: 'isRight'
        }
      },
      {
        path: 'projects',
        title: 'Experience',
        component: ProjectsComponent,
        data: {
          // animation: 'isRight'
        },
      },
      {
        path: 'certifications',
        component: CertificationsComponent
      },
      {
        path: '**',
        redirectTo: 'about-me'
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