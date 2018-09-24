import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

import {AuthService} from '../../core/services/auth.service';

@Component({
  selector: 'is-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  async register(event: FormGroup) {
    const {email, password} = event.value;

    try {
      await this.authService.registerUser(email, password);
      this.router.navigate(['/']);
    } catch (err) {
      this.error = err.message;
    }

  }

}
