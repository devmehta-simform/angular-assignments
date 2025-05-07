import { Component } from '@angular/core';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-table',
  imports: [],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css',
})
export class UserTableComponent {
  showUserFormModal() {}
  users: User[] = [
    {
      name: 'Alice Johnson',
      department: 'Engineering',
      email: 'alice.johnson@example.com',
      password: 'Alice@1234',
      designation: 'Software Engineer',
      salary: '90000',
      createdAt: new Date('2024-11-10'),
    },
    {
      name: 'Bob Smith',
      department: 'Marketing',
      email: 'bob.smith@example.com',
      password: 'Bob$2024',
      designation: 'Marketing Manager',
      salary: '75000',
      createdAt: new Date('2025-01-15'),
    },
    {
      name: 'Charlie Lee',
      department: 'Sales',
      email: 'charlie.lee@example.com',
      password: 'Char!ie123',
      designation: 'Sales Executive',
      salary: '68000',
      createdAt: new Date('2024-09-01'),
    },
    {
      name: 'Diana Patel',
      department: 'Human Resources',
      email: 'diana.patel@example.com',
      password: 'Diana#2025',
      designation: 'HR Specialist',
      salary: '72000',
      createdAt: new Date('2025-02-20'),
    },
    {
      name: 'Ethan Williams',
      department: 'Finance',
      email: 'ethan.williams@example.com',
      password: 'Ethan*999',
      designation: 'Accountant',
      salary: '83000',
      createdAt: new Date('2024-12-05'),
    },
  ];
}
