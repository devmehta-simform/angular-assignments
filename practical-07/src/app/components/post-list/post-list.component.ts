import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { Post } from '../../types/post';
import { PostService } from '../../services/post.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-list',
  imports: [RouterLink, PostListItemComponent, AsyncPipe, FormsModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts$!: Observable<{ posts: Post[]; totalItems: number }>;
  page: number = 1;
  pageOffset: number = 10;

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getAllPosts(this.page, this.pageOffset);
  }

  getPreviousPage(totalItems: number) {
    this.page = this.page - 1;
    this.goToPage(totalItems);
  }

  getNextPage(totalItems: number) {
    this.page = this.page + 1;
    this.goToPage(totalItems);
  }

  goToPage(totalItems: number) {
    if (this.page >= 1 && this.page <= Math.ceil(totalItems / this.pageOffset))
      this.posts$ = this.postService.getAllPosts(this.page, this.pageOffset);
    else alert('invalid page number');
  }

  getTotalNumberOfPages(totalItems: number) {
    return Math.ceil(totalItems / this.pageOffset);
  }

  handleDeletePost(id: number) {
    this.posts$ = this.postService.deletePostById(id);
  }
}
