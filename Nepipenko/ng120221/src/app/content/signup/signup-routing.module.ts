import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';

import {BackofficeComponent} from './content/backoffice/backoffice.component';


const routes: Route[] = [
      {path: '', redirectTo: 'backoffice', pathMatch: 'full'},
      {path: 'login',
          loadChildren: () => import('./content/login/login.module').then(mod => mod.LoginModule)},
      {path: 'signup',
          loadChildren: () => import('./content/signup/signup.module').then(mod => mod.SignupModule)},
      {path: 'backoffice', component: BackofficeComponent,
        children: [
          {
              loadChildren: () => import('./content/backoffice/backoffice.module').then(mod => mod.BackofficeModule)
          }
        ]},
      {path: '**', redirectTo: 'backoffice'}
    ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
