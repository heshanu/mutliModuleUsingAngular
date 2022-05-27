import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthBaseComponent } from './auth/auth-base/auth-base.component';
import { HomeBaseComponent } from './home/home-base/home-base.component';
import { PageNotFoundComponent } from './auth/errors/page-not-found/page-not-found.component';
import { SettingsModule } from './settings/settings.module';

const routes: Routes = [
  {
    path: '',
    component: AuthBaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
      },
      {
        //lazy loading
        path: 'auth',
        loadChildren: () =>
          import('./auth/auth.module').then((m) => m.AuthModule),
      },
    ],
  },
  {
    path: '',
    component: HomeBaseComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m1) => m1.HomeModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('./settings/settings.module').then((m1) => m1.SettingsModule)
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
