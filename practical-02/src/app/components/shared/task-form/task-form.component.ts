import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
export class TaskFormComponent implements OnInit {
  @Input() updateTask?: Task;
  @Output() formSubmit = new EventEmitter<Task>();
  now = new Date();
  error: string = '';
  isUpdating: boolean = false;
  task!: Task;
  submitForm() {
    if (this.task.name != '') {
      this.formSubmit.emit(this.task);
      this.task.body = '';
      this.task.name = '';
      this.task.createdAt = new Date();
      this.task.id = '';
      this.task.isCompleted = false;
      this.error = '';
      this.isUpdating = false;
    } else {
      this.error = 'title required';
    }
  }
  ngOnInit() {
    this.task = this.updateTask || {
      name: '',
      body: '',
      isCompleted: false,
      id: crypto.randomUUID(),
      createdAt: this.now,
    };
    if (this.updateTask) this.isUpdating = true;
  }
}
