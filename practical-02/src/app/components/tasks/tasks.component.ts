import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { Task } from '../../models/task.model';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [ButtonComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[];
  constructor() {
    this.tasks = [
      {
        name: 'Buy groceries',
        createdAt: new Date('2025-03-18T08:30:00'),
        body: 'Buy milk, bread, and coffee from the store.',
        isCompleted: false,
      },
      {
        name: 'Complete homework',
        createdAt: new Date('2025-03-19T10:00:00'),
        body: 'Finish the math and science assignments due tomorrow.',
        isCompleted: true,
      },
      {
        name: 'Call parents',
        createdAt: new Date('2025-03-20T12:00:00'),
        body: 'Call my parents to check on them and talk about the weekend plans.',
        isCompleted: false,
      },
      {
        name: 'Clean the house',
        createdAt: new Date('2025-03-21T14:00:00'),
        body: 'Vacuum the living room, dust the shelves, and clean the kitchen.',
        isCompleted: true,
      },
      {
        name: 'Walk the dog',
        createdAt: new Date('2025-03-22T16:00:00'),
        body: 'Take the dog for a walk in the park.',
        isCompleted: false,
      },
    ];
  }
  clickHandler() {
    console.log('clicked');
  }
}
