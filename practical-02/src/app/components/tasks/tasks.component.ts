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
  taskToUpdate?: Task;
  isAddingOrUpdating: boolean = false;
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }
  toggleIsAddingOrUpdating() {
    this.isAddingOrUpdating = !this.isAddingOrUpdating;
  }
  createTask(task: Task) {
    this.tasks = this.taskService.createTask(task);
  }
  deleteTask(id: string) {
    this.tasks = this.taskService.deleteTaskById(id);
  }
  updateTask(task: Task) {
    this.tasks = this.taskService.updateTaskById(task.id, task);
  }
  handleUpdateTask(task: Task) {
    this.taskToUpdate = task;
    this.isAddingOrUpdating = !this.isAddingOrUpdating;
  }
  handleFormSubmit(task: Task) {
    if (this.taskService.getTaskById(task.id)) {
      this.updateTask(task);
    } else {
      this.createTask(task);
    }
    this.isAddingOrUpdating = !this.isAddingOrUpdating;
  }
}
