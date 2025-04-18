import { Component, Input, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { Department } from '../../types/department';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-department',
  imports: [AccordionComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit {
  @Input({ required: true }) department!: Department;
  userNamesInDepartment: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userNamesInDepartment = this.userService
      .getAllUsersInDept(this.department.name)
      .map((user) => user.name);
  }
}
