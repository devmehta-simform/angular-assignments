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
  @Output() toggleStatus = new EventEmitter<Task>();
  onDeleteTask() {
    if (confirm(`are you sure you want to delete task: '${this.task.name}'?`))
      this.delete.emit(this.task.id);
  }
  onToggleStatus() {
    this.toggleStatus.emit({
      ...this.task,
      isCompleted: !this.task.isCompleted,
    });
  }
  onEditTask() {
    // bug! this.update.emit(this.task); // here we send original object itself
    this.update.emit({ ...this.task });
  }
}
