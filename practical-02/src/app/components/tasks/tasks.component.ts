import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { Task } from '../../models/task.model';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../services/task-service/task.service';
import { ErrorComponent } from '../shared/error/error.component';
import { TaskFormComponent } from '../shared/task-form/task-form.component';

@Component({
  selector: 'app-tasks',
  imports: [ButtonComponent, TaskComponent, ErrorComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[];
  isAdding: boolean = false;
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }
  toggleIsAdding() {
    this.isAdding = !this.isAdding;
  }
  createTask(task: Task) {
    this.tasks = this.taskService.createTask(task);
    this.isAdding = !this.isAdding;
  }
  deleteTask(id: string) {
    this.tasks = this.taskService.deleteTaskById(id);
  }
  updateTask(task: Task) {
    this.tasks = this.taskService.updateTaskById(task.id, {
      isCompleted: task.isCompleted,
    });
  }
}
