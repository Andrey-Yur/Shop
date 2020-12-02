import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { strict } from 'assert';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'firebase-demo';

  isSignedIn = false;

  constructor(public firebaseService: FirebaseService) {}

  ngOnInit() {
    if (localStorage.getItem('mobPhone') !== null) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }
  }
  async onSignup(phoneNumber: string) {}
}
