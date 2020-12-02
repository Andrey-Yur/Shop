import { Component } from '@angular/core';
import firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyAYganldh5ZxcECFld2hgVrERoi3QN5BgM',
  authDomain: 'yard-service-ca.firebaseapp.com',
  databaseURL: 'https://yard-service-ca.firebaseio.com',
  projectId: 'yard-service-ca',
  storageBucket: 'yard-service-ca.appspot.com',
  messagingSenderId: '221240637235',
  appId: '1:221240637235:web:ebf3612028b08e44a77046',
};
firebase.initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'yard-service';
}
