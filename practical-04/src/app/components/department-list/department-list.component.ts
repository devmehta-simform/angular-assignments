import { Component, OnInit } from '@angular/core';
import { Department } from '../../types/department';
import { DepartmentService } from '../../services/department.service';
import { DepartmentComponent } from '../department/department.component';

@Component({
  selector: 'app-department-list',
  imports: [DepartmentComponent],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css',
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.departments = this.departmentService.getAllDepartments();
  }
}
