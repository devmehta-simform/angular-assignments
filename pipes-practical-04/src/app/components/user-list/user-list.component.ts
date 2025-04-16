import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { User } from '../../types/user';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [UserComponent, AsyncPipe, CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users$ = this.userService.getAllUsers();
  }
}
