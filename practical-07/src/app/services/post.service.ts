import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../types/post';
import { catchError, map, mergeMap, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private deletedPosts: string[] = [];
  private createdPosts: Post[] = [];
  constructor(private httpClient: HttpClient) {}

  getAllPosts() {
    return this.httpClient
      .get<Post[]>(environment.POSTS_API_URL)
      .pipe(
        map((posts) => [
          ...this.createdPosts.filter(
            (post) => !this.deletedPosts.includes(post.id)
          ),
          ...posts.filter((post) => !this.deletedPosts.includes(post.id)),
        ])
      );
  }

  getPostById(id: string) {
    return this.httpClient.get<Post>(environment.POSTS_API_URL + '/' + id).pipe(
      catchError(() => {
        const otherPost = this.createdPosts.find((p) => p.id === id);
        return of(otherPost!);
      })
    );
  }

  createPost(post: Post) {
    this.createdPosts.push(post);
    return this.httpClient.post(environment.POSTS_API_URL, { post });
  }

  deletePostById(id: string) {
    this.deletedPosts.push(id);
    return this.httpClient.delete(environment.POSTS_API_URL + '/' + id).pipe(
      mergeMap(() => {
        return this.getAllPosts();
      })
    );
  }
}
