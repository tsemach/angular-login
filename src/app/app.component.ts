import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/users';
import { AuthenticationService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-login';
  currentUser: User = {
    id: 1,
    username: 'tsemach',
    password: 'password',
    firstName: 'Tsemach',
    lastName: 'Mizrachi',
    token: '1234'
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
