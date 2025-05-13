import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { PostListItemComponent } from '../post-list-item/post-list-item.component';
import { Post } from '../../types/post';
import { PostService } from '../../services/post.service';
import { debounceTime, Observable, Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

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
  searchQuery$: Subject<string> = new Subject<string>();
  searchQuery = '';

  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router
  ) {
    this.posts$ = this.postService.getAllPosts(this.page, this.pageOffset);
    this.searchQuery$.pipe(debounceTime(500)).subscribe((searchQuery) => {
      this.searchQuery = searchQuery;
      this.posts$ = this.postService.searchPost(
        searchQuery,
        this.page,
        this.pageOffset
      );
    });
  }

  handleSearch(e: Event) {
    const searchInput = e.target;
    if (searchInput instanceof HTMLInputElement) {
      const trimmedString = searchInput.value.trim();
      this.searchQuery = this.searchQuery.trim();
      if (trimmedString) this.searchQuery$.next(trimmedString);
    }
  }

  clearSearch() {
    this.searchQuery$.next('');
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
    if (
      this.page >= 1 &&
      this.page <= Math.ceil(totalItems / this.pageOffset)
    ) {
      if (this.searchQuery) {
        this.posts$ = this.postService.searchPost(
          this.searchQuery,
          this.page,
          this.pageOffset
        );
      } else {
        this.posts$ = this.postService.getAllPosts(this.page, this.pageOffset);
      }
    } else alert('invalid page number');
  }

  getTotalNumberOfPages(totalItems: number) {
    return Math.ceil(totalItems / this.pageOffset);
  }

  handleDeletePost(id: number) {
    this.posts$ = this.postService.deletePostById(id);
  }

  logoutUser() {
    this.userService.logoutUser();
    this.router.navigate(['auth']);
  }
}
