import { Component, OnInit } from '@angular/core';
import { Department } from '../../types/department';
import { DepartmentService } from '../../services/department.service';
import { DepartmentComponent } from '../department/department.component';
import { ModalComponent } from '../modal/modal.component';
import { CreateDto } from '../../types/createDto';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user';
import { ModalService } from '../../services/modal.service';
import { ModalType } from '../../types/modal';

@Component({
  selector: 'app-department-list',
  imports: [DepartmentComponent, ModalComponent],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];

  constructor(
    private departmentService: DepartmentService,
    private userService: UserService,
    private modalService: ModalService
  ) {}

  ngOnInit() {
    this.departments = this.departmentService.getAllDepartments();
  }

  create(obj: CreateDto) {
    console.log(obj);
    switch (obj.type) {
      case 'department':
        if (this.isDepartment(obj.data)) {
          this.departmentService.createDepartment(obj.data.name);
          this.departments = this.departmentService.getAllDepartments();
        }
        break;
      case 'user':
        if (this.isUser(obj.data)) {
          this.userService.createUser(obj.data.name, obj.data.deptName);
          this.departments = this.departmentService.getAllDepartments();
        }
        break;
    }
  }

  isDepartment(department: unknown): department is Department {
    return (
      !!department &&
      typeof department === 'object' &&
      'name' in department &&
      typeof department.name === 'string'
    );
  }

  isUser(user: unknown): user is User {
    return (
      !!user &&
      typeof user === 'object' &&
      'name' in user &&
      typeof user.name === 'string' &&
      'deptName' in user &&
      typeof user.deptName === 'string'
    );
  }

  openModal(modalType: ModalType) {
    this.modalService.showModal(modalType);
  }
}
