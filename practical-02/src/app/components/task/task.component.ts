import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [DatePipe, RouterLink],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Partial<Task>;
}
