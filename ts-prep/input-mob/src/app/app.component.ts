import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'input-mob';
  registerForm: FormGroup;
  submitted = false;

  hasError($event) {}
  getNumber($event) {}

  telInputObject($event) {}
  onCountryChange($event) {}
}
