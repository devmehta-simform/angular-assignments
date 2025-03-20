import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { Task } from '../../models/task.model';
import { TaskComponent } from '../task/task.component';
import { TaskService } from '../../services/task-service/task.service';
import { ErrorComponent } from '../shared/error/error.component';

@Component({
  selector: 'app-tasks',
  imports: [ButtonComponent, TaskComponent, ErrorComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[];
  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }
  clickHandler() {
    console.log('clicked');
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
