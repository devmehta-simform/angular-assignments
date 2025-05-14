import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { AuthComponent } from './components/auth/auth.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'posts',
    canActivate: [authGuard],
    component: PostListComponent,
  },
  {
    path: 'post-form',
    canActivate: [authGuard],
    component: PostFormComponent,
  },
  {
    path: 'post-form/:id',
    canActivate: [authGuard],
    component: PostFormComponent,
  },
  {
    path: 'post-details/:id',
    canActivate: [authGuard],
    component: PostDetailsComponent,
  },
];
