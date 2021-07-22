import { NgModule } from '@angular/core';
import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';
import {SharedModule} from '../../shared/shared.module';
import {LoginModule} from '../login/login.module';


@NgModule({
  declarations: [SignupComponent],
       imports: [
        SignupRoutingModule,
        SharedModule,
        LoginModule
       ]
})
export class SignupModule { }
