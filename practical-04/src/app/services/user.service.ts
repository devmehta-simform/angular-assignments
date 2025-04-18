import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { DepartmentService } from './department.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: User[] = [];

  constructor(private departmentService: DepartmentService) {}

  createUser(name: string, deptName: string) {
    this.users.push({ name, deptName });
    this.departmentService.addUserToDepartment(deptName);
  }

  getAllUsersInDept(deptName: string) {
    return [
      ...this.users.filter((user) => {
        user.deptName === deptName;
      }),
    ];
  }
}
