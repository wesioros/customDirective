import { Component } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material';
import {FormBuilder, FormGroup, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

import { Observable } from 'rxjs';
import { error } from 'util';
class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

@Component({
  selector: 'app-react-form',
  template: `
  <h2 class="mat-title">Sign-up form:</h2>
<form class="example-form" (ngSubmit)="onSubmit()" [formGroup]='userForm' *appAddError= " let form from userForm">
<div
>
  <mat-form-field fxFlex>
    <input type="text" matInput placeholder="Username" formControlName='username'>
  </mat-form-field >
  </div>
  <div>
  <mat-form-field>
    <input type="number" matInput placeholder="userAge" formControlName='age'>
  </mat-form-field>
  </div>
  <div>
  <mat-form-field>
    <input type="password" matInput placeholder="Password" formControlName='password'>
  </mat-form-field>
  </div>
   <div>
    <mat-form-field fxFlex>
    <input type="password" matInput placeholder="Verify Password" formControlName='verifyPassword' >
    <mat-error *ngIf="userForm.hasError('passwordsDoNotMatch')">
      Passwords do not match!
    </mat-error>
  </mat-form-field>
</div>
  <div class="state">
    Do passwords match?
    <strong>{{!userForm.hasError('passwordsDoNotMatch')}}</strong>
  </div>
  <button mat-raised-button color="primary" class="submit-btn" type="button" [disabled]="!userForm.valid">Login!</button>
</form>

`,
  styles: ['./react-form.component.css']
})
export class ReactFormComponent {
  userForm: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();

  initForm() {
    this.userForm = this.fb.group({
      username: ['', [Validators.required]],
      age: [null, [Validators.required, Validators.min(18)]],
      password: ['', [Validators.required]],
      verifyPassword: ''
    }, {
      validator: this.passwordValidator
    });
  }
  passwordValidator(form: FormGroup) {
    const condition = form.get('password').value !== form.get('verifyPassword').value;

    return condition ? { passwordsDoNotMatch: true} : null;
  }

  constructor(private fb: FormBuilder) {this.initForm(); }




}
