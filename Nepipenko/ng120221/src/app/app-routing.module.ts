import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AuthGuard} from './shared/services/auth.guard';
import {PreloadService} from './shared/services/preload.service';

const routes: Route[] = [
      {path: '', redirectTo: 'backoffice', pathMatch: 'full'},
      {path: 'login',
          loadChildren: () => import('./content/login/login.module').then(mod => mod.LoginModule), canActivate: [AuthGuard]},
      {path: 'signup',
          loadChildren: () => import('./content/signup/signup.module').then(mod => mod.SignupModule), canActivate: [AuthGuard]},
      {path: 'backoffice',
          loadChildren: () => import('./content/backoffice/backoffice.module').then(mod => mod.BackofficeModule), canActivate: [AuthGuard]},
      {path: '**', redirectTo: 'backoffice'}
    ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadService}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
