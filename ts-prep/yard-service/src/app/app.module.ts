import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { SharedModule } from './shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './shared/auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CastTelPipe } from './pipes/cast-tel.pipe';
import { WindowService } from './admin/shared/services/window.service';
import { AuthService } from './admin/shared/services/auth.service';
import { AuthService1 } from './admin/shared/services/auth.service1';
import { AngularFireModule } from '@angular/fire';

const INTERCEPTOR_PROVAIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: AuthInterceptor,
};

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    ResultPageComponent,
    CastTelPipe,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [INTERCEPTOR_PROVAIDER, WindowService],
  bootstrap: [AppComponent],
})
export class AppModule {}
