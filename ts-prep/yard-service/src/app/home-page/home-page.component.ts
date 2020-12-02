import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import {
  AsYouType,
  E164Number,
  ParseError,
  parsePhoneNumber,
  parsePhoneNumberWithError,
  PhoneNumber,
} from 'libphonenumber-js';
import examples from 'libphonenumber-js/examples.mobile.json';
import { WindowService } from '../admin/shared/services/window.service';
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import { auth } from 'firebaseui';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  inputVal = '';

  phoneNumber = '+19638527410';
  windowRef: any;
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  verificationCode: string;
  user: any;
  phoneSignIn = false;
  //otpSend: string;
  recaptcha: any[];
  castPh: E164Number;
  res = false;

  get otp(): any {
    return this.form.get('otp');
  }
  constructor(private router: Router, private windowService: WindowService) {
    this.windowRef = this.windowService.windowRef;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      tel: new FormControl(null, [
        Validators.required,
        Validators.minLength(14),
      ]),
      // otpSend: new FormGroup({
      otp: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
      ]),
      // }),
    });
  }
  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'normal',

        callback: (response) => {
          this.res = true;
          console.log(response);
          if (this.form.get('tel').valid) {
            this.phoneSignIn = true;
          }
          //   console.log(this.form.status);
          // return this.form.status;
          // this.phoneSignIn = true;
          // this.phoneNumber = this.castPh.toString();

          // console.log('No err');
        },
        'expired-callback': () => {
          this.phoneSignIn = false;
          // Response expired. Ask user to solve reCAPTCHA again.
        },
      }
    );
    this.windowRef.recaptchaVerifier.render();
  }

  verifyOtp() {
    //this.otp = this.form.get('otp').value;
    console.log(this.otp);
    this.windowRef.confirmationResult
      .confirm(this.otp)
      .then((userCredentials) => {
        console.log(userCredentials);
        this.user = userCredentials.user;
      })
      .catch((error) => console.log(error, 'iccorrect code'));
  }
  onSubmit() {}

  reset() {}

  onInput(event: any) {
    this.inputVal = event.target.value;

    try {
      this.castPh = parsePhoneNumber(this.inputVal, 'CA').number;
    } catch (error) {
      console.log(error.message);
    }
  }

  cancelPhoneSignIn() {
    this.phoneSignIn = false;
    //this.windowRef.recaptchaVerifier.;
  }
}
// if (this.form.get('tel').valid) {
//   firebase
//     .auth()
//     .signInWithPhoneNumber(
//       this.phoneNumber,
//       this.windowRef.recaptchaVerifier
//     )
//     .then((confirmationResult) => {
//       //   this.phoneSignIn = true;
//       this.windowRef.confirmationResult = confirmationResult;
//       console.log(confirmationResult, 'CResult');
//     })
//     .catch((error) => {
//       console.log(error);
//       this.windowRef.recaptchaVerifier.clear();
//     });
//   // reCAPTCHA solved, allow signInWithPhoneNumber.
//   // ...
// }
