import { NgModule } from '@angular/core';
import {BackofficeRoutingModule} from './backoffice-routing.module';
import {BackofficeComponent} from './backoffice.component';
import {HeaderComponent} from './header/header.component';
import {SideMenuComponent} from './side-menu/side-menu.component';
import {ExchangeRatesComponent} from './header/exchange-rates/exchange-rates.component';
import {ExchangeRatesDirective} from './header/exchange-rates/exchange-rates.directive';
import {HiddenDirective} from './header/exchange-rates/hidden.directive';
import {SharedModule} from '../../shared/shared.module';




@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    ExchangeRatesComponent,
    ExchangeRatesDirective,
    HiddenDirective,
    BackofficeComponent,
    ],
  imports: [
      SharedModule,
      BackofficeRoutingModule
  ]
 })
export class BackofficeModule { }
