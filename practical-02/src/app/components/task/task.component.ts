import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Output() delete = new EventEmitter();
  @Output() update = new EventEmitter<Task>();
  onDeleteTask() {
    this.delete.emit(this.task.id);
  }
  toggleStatus() {
    this.update.emit({ ...this.task, isCompleted: !this.task.isCompleted });
  }
}
