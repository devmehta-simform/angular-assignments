import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../models/task.model';
import { ButtonComponent } from '../button/button.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule, ButtonComponent, DatePipe],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  @Output() formSubmit = new EventEmitter<Task>();
  error: string = '';
  submitForm() {
    if (this.task.name != '') {
      this.formSubmit.emit(this.task);
      this.task.body = '';
      this.task.name = '';
      this.task.createdAt = new Date();
      this.task.id = '';
      this.task.isCompleted = false;
      this.error = '';
    } else {
      this.error = 'title required';
    }
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
