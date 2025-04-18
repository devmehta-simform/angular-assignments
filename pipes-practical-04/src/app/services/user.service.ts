import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { UserSchema } from '../schemas/user';
import { User } from '../types/user';
import { z } from 'zod';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = '/users';

  constructor(private httpClient: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get(environment.API_BASE_URL + this.baseUrl).pipe(
      map((res) => {
        const user = z.array(UserSchema).parse(res);
        return user;
      })
    );
  }
}
