import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  loginUser(email: string, password: string) {
    return this.httpClient.post<User>(environment.USERS_API_URL + '/login', {
      email,
      password,
    });
  }

  logoutUser() {
    localStorage.removeItem('user');
  }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser(): User | undefined {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return undefined;
  }
}
