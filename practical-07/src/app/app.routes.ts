import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostFormComponent } from './components/post-form/post-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'posts',
  },
  { path: 'posts', component: PostListComponent },
  {
    path: 'post-form',
    component: PostFormComponent,
  },
  {
    path: 'post-form/:id',
    component: PostFormComponent,
  },
  {
    path: 'post-details/:id',
    component: PostDetailsComponent,
  },
];
