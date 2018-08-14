import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';


@Component({
  selector: 'is-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  async login(event: FormGroup) {
    const {email, password} = event.value;

    try {
      await this.authService.login(email, password);
      this.router.navigate(['/']);
    } catch (err) {
      this.error = err.message;
    }
  }

}
