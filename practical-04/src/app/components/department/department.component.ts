import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { Department } from '../../types/department';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-department',
  imports: [AccordionComponent],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css',
})
export class DepartmentComponent implements OnInit, OnChanges {
  @Input({ required: true }) department!: Department;
  @Input({ required: true }) isFiltered!: boolean;
  userNamesInDepartment: string[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userNamesInDepartment = this.userService
      .getAllUsersInDept(this.department.name)
      .map((user) => user.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const newDepartment = changes['department']?.currentValue;
    if (this.isDepartment(newDepartment)) {
      this.department = newDepartment;
      this.userNamesInDepartment = this.userService
        .getAllUsersInDept(newDepartment.name)
        .map((user) => user.name);
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
}
