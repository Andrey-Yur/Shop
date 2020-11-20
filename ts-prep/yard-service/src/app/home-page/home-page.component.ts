import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  PhoneNumber,
  parsePhoneNumber,
  parsePhoneNumberWithError,
  ParseError,
} from 'libphonenumber-js/max';
import { AsYouType } from 'libphonenumber-js/max';

import { CastTelPipe } from '../pipes/cast-tel.pipe';
import examples from 'libphonenumber-js/examples.mobile.json';
import { getExampleNumber } from 'libphonenumber-js/max';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  form: FormGroup;
  //phoneNumber = getExampleNumber('CA', examples);
  exampleVal = getExampleNumber('CA', examples).formatNational();
  inputVal = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      tel: new FormControl(null, [Validators.required]),
    });
  }

  submit() {}
  reset() {}
  onInput(event: any) {
    try {
      this.inputVal = parsePhoneNumber(event.target.value, 'CA').format(
        'NATIONAL'
      );

      // const phoneNumber = parsePhoneNumberWithError(event.target.value, 'CA');
    } catch (error) {
      if (error instanceof ParseError) {
        // Not a phone number, non-existent country, etc.
        console.log(error.message);
      } else {
        throw error;
      }
    }

    // console.log(parsePhoneNumber(this.inputVal, 'CA').isValid());
  }
}
