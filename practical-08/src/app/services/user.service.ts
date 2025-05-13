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
}
