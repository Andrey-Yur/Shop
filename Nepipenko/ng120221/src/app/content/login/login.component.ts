import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userNameCtrl = new FormControl('', [Validators.required, Validators.minLength(5)]);
  public value = '';
  constructor() { }

  ngOnInit(): void {
  }

public login(formValue: any): void{
    console.log(formValue);
}
}
