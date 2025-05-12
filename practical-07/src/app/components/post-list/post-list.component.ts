import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { Post } from '../../types/post';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink, PostListItemComponent, AsyncPipe],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getAllPosts();
  }

  handleDeletePost(id: string) {
    this.posts$ = this.postService.deletePostById(id);
  }
}
