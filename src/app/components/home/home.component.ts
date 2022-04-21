import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../models'
import { UserService, AuthenticationService } from '../../services'

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService
    ) {
      this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
      this.loadAllUsers();
      console.log('[HomeComponent:ngOninit], users', this.users, this)
    }

    deleteUser(id: number) {
      this.userService.delete(id)
        .pipe(first())
        .subscribe(() => this.loadAllUsers());
    }

    private loadAllUsers() {
      this.userService.getAll()
        .pipe(first())
        .subscribe((users: any) => {
          this.users = users;
          console.log("[HomeComponent:loadAllUsers] this.users:", this.users, this)
        });          
      console.log('[HomeComponent:loadAllUsers], users', this.users, this)
    }
}