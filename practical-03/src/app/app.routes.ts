import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

export const routes: Routes = [
  { title: 'home', path: '', component: HomeComponent },
  { title: 'task-details', path: 'tasks/:id', component: TaskDetailsComponent },
];
