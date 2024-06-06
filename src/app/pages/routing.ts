import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: '',
    loadChildren: () => import('./website/website.module').then((m) => m.WebsiteModule),
  },
  {
    path: 'distribution',
    loadChildren: () => import('./distribution/distribution.module').then((m) => m.DistributionModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };