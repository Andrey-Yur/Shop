import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { E164Number, parsePhoneNumber } from 'libphonenumber-js';
import { WindowService } from '../admin/shared/services/window.service';
import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import { Observable } from 'rxjs';

import { fromEvent, Subscription } from 'rxjs';
import { MyValidators } from '../my.validators';
import { AuthService } from '../admin/shared/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('capt', { static: false }) captсhaRef: ElementRef;

  subscription: Subscription[] = [];
  form: FormGroup;
  inputVal = '';
  inputVal1 = '';

  // phoneNumber = '+19638527410';
  phoneNumber: E164Number;
  windowRef: any;
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  verificationCode: string;
  user: any;
  phoneSignIn = false;
  castPh: E164Number;
  res = false;
  response: string;

  get otp(): any {
    return this.form.get('otp');
  }
  constructor(
    private router: Router,
    private win: WindowService,
    private auth: AuthService
  ) {
    this.windowRef = this.win.windowRef;
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      tel: new FormControl(null, [
        Validators.required,
        Validators.minLength(14),
        // MyValidators.restrictedPhones,
      ]),
      // otpSend: new FormGroup({
      otp: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$'),
      ]),
    });
  }

  ngAfterViewInit() {
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'normal',
        callback: (response: firebase.auth.RecaptchaVerifier) => {
          console.log('Есть ответ res будет true:', response);
          this.res = true;
        },
        'expired-callback': () => {
          this.res = false;
          //  recaptcha.reset(this.windowRef.recaptchaWidgetId);
        },
        // Response expired. Ask user to solve reCAPTCHA again.
      }
    );
    this.windowRef.recaptchaVerifier.render();
  }

  verifyOtp() {
    if (this.form.get('otp').valid) {
      console.log(this.otp.value);
      this.windowRef.confirmationResult
        .confirm(this.otp.value)
        .then((userCredentials) => {
          console.log(userCredentials);
          this.user = userCredentials.user;
        })
        .catch((error) => console.log(error, 'incorrect code'));
    }
  }

  reset() {}

  onInput(event: any) {
    this.inputVal = event.target.value;
    // this.inputVal1 = event.target.classList.for;

    // console.log(event);
    if (this.form.get('tel').valid && this.res) {
      const appVerifier = this.windowRef.recaptchaVerifier;
      this.phoneNumber = parsePhoneNumber(this.inputVal, 'CA').number;
      firebase
        .auth()
        .signInWithPhoneNumber(this.phoneNumber.toString(), appVerifier)
        .then((result) => {
          this.windowRef.confirmationResult = result;
        })
        .catch((error) => console.log(error));
    }
  }
  onSub() {
    this.auth.checkUsr().subscribe(() => {
      // console.log(this.res);
    });
    // if (this.form.get('otp').valid && this.res) {
    //   const appVerifier = this.windowRef.recaptchaVerifier;
    //   console.log('Recaptcha Verifier1:', appVerifier);
    //   this.phoneNumber = parsePhoneNumber(this.inputVal, 'CA').number;
    //   firebase
    //     .auth()
    //     .signInWithPhoneNumber(this.phoneNumber.toString(), appVerifier)
    //     .then((confirmationResult) => {
    //       this.windowRef.confirmationResult = confirmationResult;
    //     })
    //     .catch((error) => console.log(error));
    // }
  }
}
