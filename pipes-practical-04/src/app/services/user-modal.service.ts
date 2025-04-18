import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserModalService {
  private modal$ = new BehaviorSubject<User | null>(null);

  constructor() {}

  getUserModal$() {
    return this.modal$.asObservable();
  }

  showModal(user: User) {
    this.modal$.next(user);
  }

  closeModal() {
    this.modal$.next(null);
  }
}
