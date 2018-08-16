import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {User} from './../../shared/models/user.model';

@Component({
  selector: 'is-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  this.authService.user$.subscribe((user) => this.user = user);
  }

  logout() {
    this.authService.logout();
  }

}
