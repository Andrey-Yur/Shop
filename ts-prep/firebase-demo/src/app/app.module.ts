import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { FirebaseService } from './services/firebase.service';
const firebaseConfig = {
  apiKey: 'AIzaSyAYganldh5ZxcECFld2hgVrERoi3QN5BgM',
  authDomain: 'yard-service-ca.firebaseapp.com',
  databaseURL: 'https://yard-service-ca.firebaseio.com',
  projectId: 'yard-service-ca',
  storageBucket: 'yard-service-ca.appspot.com',
  messagingSenderId: '221240637235',
  appId: '1:221240637235:web:ebf3612028b08e44a77046',
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularFireModule.initializeApp(firebaseConfig)],
  providers: [FirebaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
