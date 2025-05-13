import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  loginUser(email: string, password: string) {
    return this.httpClient.post(environment.USERS_API_URL + '/login', {
      email,
      password,
    });
  }

  logoutUser() {
    localStorage.removeItem('user');
  }

  saveUser(email: string) {
    localStorage.setItem('user', JSON.stringify({ email }));
  }

  getUser(): { email: string } | undefined {
    const user = localStorage.getItem('user');
    if (user) return JSON.parse(user);
    return undefined;
  }
}
