import { Component, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Partial<Task>;
}
