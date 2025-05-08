import { Component, ElementRef, ViewChild } from '@angular/core';
import { User } from '../../types/user';
import { UserFormModalComponent } from '../user-form-modal/user-form-modal.component';
import { UserService } from '../../services/user.service';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-table',
  imports: [UserFormModalComponent, DatePipe, FormsModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent {
  users: User[] = [];
  @ViewChild('userFormModal') userFormModal!: ElementRef;
  selectedUser?: User;
  pageNumber = 1;
  pageOffset = 3;

  constructor(private userService: UserService) {
    this.users = this.userService.getAllUsers();
  }

  showUserFormModal() {
    const modal = this.userFormModal.nativeElement;
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  }

  setSelectedUser(user: User) {
    this.selectedUser = user;
    this.showUserFormModal();
  }

  createUser(user: User) {
    this.users = this.userService.createUser(user);
    this.selectedUser = undefined;
    this.pageNumber = 1;
  }

  updateUser(user: User) {
    this.users = this.userService.updateUser(user.email, user);
    this.selectedUser = undefined;
    this.pageNumber = 1;
  }

  deleteUser(userEmail: string) {
    this.users = this.userService.deleteUser(userEmail);
    this.selectedUser = undefined;
    this.pageNumber = 1;
  }
}
