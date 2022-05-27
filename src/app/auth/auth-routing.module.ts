import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'signin',
        component: SigninComponent,
      },
    ],
  },{
    path:'',
    redirectTo:'signup',
    pathMatch:'full'
  },{
    path:'',
    children:[
      {
        path:'signup',
        component:SignupComponent
      }
    ]
  },{
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
