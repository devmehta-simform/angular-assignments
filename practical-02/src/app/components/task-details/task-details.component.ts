import { Component } from '@angular/core';
import { TaskService } from '../../services/task-service/task.service';
import { Task } from '../../models/task.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ButtonComponent } from '../shared/button/button.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-details',
  imports: [ButtonComponent, RouterLink, DatePipe],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css',
})
export class TaskDetailsComponent {
  task?: Task;
  constructor(private taskService: TaskService, private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.task = this.taskService.getTaskById(id);
    } else this.task = undefined;
  }
}
