import { Component } from '@angular/core';
import { User } from '../../types/user';
import { UserFormModalComponent } from '../user-form-modal/user-form-modal.component';
import { UserService } from '../../services/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-table',
  imports: [UserFormModalComponent, DatePipe],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent {
  users: User[] = [];

  constructor(private userService: UserService) {
    this.users = this.userService.getAllUsers();
  }

  createUser(user: User) {
    this.users = this.userService.createUser(user);
  }
}
