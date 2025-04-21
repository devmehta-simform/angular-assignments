import { Injectable } from '@angular/core';
import { Department } from '../types/department';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  departmentsMap: Map<string, Department> = new Map<string, Department>([
    ['Node', { name: 'Node', numberOfUser: 0 }],
    ['React', { name: 'React', numberOfUser: 0 }],
  ]);

  constructor() {}

  createDepartment(name: string) {
    if (!this.departmentsMap.has(name))
      this.departmentsMap.set(name, { name, numberOfUser: 0 });
  }

  getAllDepartments() {
    return [...this.departmentsMap.values()];
  }

  addUserToDepartment(name: string) {
    const department = this.departmentsMap.get(name);
    if (department) {
      this.departmentsMap.set(name, {
        ...department,
        numberOfUser: department.numberOfUser + 1,
      });
    }
  }
}
