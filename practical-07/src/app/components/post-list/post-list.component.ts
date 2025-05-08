import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink, PostListItemComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  // posts: Post[] = [];
}
