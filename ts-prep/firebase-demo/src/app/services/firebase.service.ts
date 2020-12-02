import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  isLoggetIn = false;

  constructor(public firebaseAuth: AngularFireAuth) {}

  async signin(phoneNumber: string, applicationVerifier: any) {
    await this.firebaseAuth
      .signInWithPhoneNumber(phoneNumber, applicationVerifier)
      .then((res) => {
        this.isLoggetIn = true;
        localStorage.ssetItem('mobPhone', JSON.stringify(res.verificationId));
      });
  }

  async signup(phoneNumber: string, applicationVerifier: any) {
    await this.firebaseAuth
      .signInWithPhoneNumber(phoneNumber, applicationVerifier)
      .then((res) => {
        this.isLoggetIn = true;
        localStorage.setItem('mobPhone', JSON.stringify(res.verificationId));
      });
  }

  logout() {
    this.firebaseAuth.signOut();
    localStorage.removeItem('mobPhone');
  }
}
