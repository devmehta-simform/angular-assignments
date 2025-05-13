import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../types/user';
import { Observable } from 'rxjs';

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

  getUser(): User | undefined;
  getUser(id: number): Observable<User>;
  getUser(id?: number): User | undefined | Observable<User> {
    if (!id) {
      const user = localStorage.getItem('user');
      if (user) return JSON.parse(user);
      return undefined;
    } else {
      return this.httpClient.get<User>(environment.USERS_API_URL + `/${id}`);
    }
  }
}
