import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../helpers/config'

import { User } from '../models'

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`http://localhost:4201/users`);
  }

  register(user: User) {
    return this.http.post(`${config.apiUrl}/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:4201/users/${id}`);
  }
}