import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/task.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule, ButtonComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  submitForm() {
    console.log('form submitted');
  }
  now = new Date();
  task: Task = {
    name: '',
    body: '',
    isCompleted: false,
    id: crypto.randomUUID(),
    createdAt: this.now,
  };
}
