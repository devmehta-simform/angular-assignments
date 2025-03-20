import { Injectable } from '@angular/core';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: crypto.randomUUID(),
      name: 'Buy groceries',
      createdAt: new Date('2025-03-18T08:30:00'),
      body: 'Buy milk, bread, and coffee from the store.',
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Complete homework',
      createdAt: new Date('2025-03-19T10:00:00'),
      body: 'Finish the math and science assignments due tomorrow.',
      isCompleted: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'Call parents',
      createdAt: new Date('2025-03-20T12:00:00'),
      body: 'Call my parents to check on them and talk about the weekend plans.',
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      name: 'Clean the house',
      createdAt: new Date('2025-03-21T14:00:00'),
      body: 'Vacuum the living room, dust the shelves, and clean the kitchen.',
      isCompleted: true,
    },
    {
      id: crypto.randomUUID(),
      name: 'Walk the dog',
      createdAt: new Date('2025-03-22T16:00:00'),
      body: 'Take the dog for a walk in the park.',
      isCompleted: false,
    },
  ];
  constructor() {}
  getTasks() {
    // return this.tasks // bug! will actually send the reference directly of the actual object
    return [...this.tasks];
  }
  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }
  createTask(task: Pick<Task, 'name' | 'body' | 'createdAt'>) {
    this.tasks.push({ ...task, id: crypto.randomUUID(), isCompleted: false });
    return [...this.tasks];
  }
  deleteTaskById(id: string) {
    const targetTaskIndex = this.tasks.findIndex((task) => task.id === id);
    if (targetTaskIndex !== -1) this.tasks.splice(targetTaskIndex, 1);
    return [...this.tasks];
  }
  updateTaskById(id: string, task: Partial<Task>) {
    const targetTaskIndex = this.tasks.findIndex((task) => task.id === id);
    if (targetTaskIndex !== -1)
      this.tasks[targetTaskIndex] = { ...this.tasks[targetTaskIndex], ...task };
    return [...this.tasks];
  }
}
