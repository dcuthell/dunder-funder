import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component'
import { AboutComponent } from './about/about.component'
import { ProjectViewComponent } from './project-view/project-view.component'

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'project-view',
    component: ProjectViewComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
