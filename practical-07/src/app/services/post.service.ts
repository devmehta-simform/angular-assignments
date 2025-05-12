import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../types/post';
import { mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getAllPosts() {
    return this.httpClient.get<Post[]>(environment.POSTS_API_URL);
  }

  getPostById(id: number) {
    return this.httpClient.get<Post>(environment.POSTS_API_URL + '/' + id);
  }

  createPost(post: Post) {
    return this.httpClient.post(environment.POSTS_API_URL, post);
  }

  updatePost(id: number, post: Partial<Post>) {
    return this.httpClient.patch(environment.POSTS_API_URL + '/' + id, post);
  }

  deletePostById(id: number) {
    return this.httpClient.delete(environment.POSTS_API_URL + '/' + id).pipe(
      mergeMap(() => {
        return this.getAllPosts();
      })
    );
  }
}
