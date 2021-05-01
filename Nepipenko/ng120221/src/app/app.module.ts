import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {ModalModule} from './modal/modal.module';
import {AppRoutingModule} from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
