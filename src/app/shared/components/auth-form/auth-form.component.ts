import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html'
})
export class AuthFormComponent implements OnInit {
  @Output() submitAuth = new EventEmitter<FormGroup>();
  authForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }


  createForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }

  get email() {
    return this.authForm.get('email');
  }

  get password() {
    return this.authForm.get('password');
  }

  onSubmit() {
    if (this.authForm.valid) {
      this.submitAuth.emit(this.authForm);

    }
  }

}
