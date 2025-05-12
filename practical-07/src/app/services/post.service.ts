import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../types/post';
import { map, mergeMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private deletedPosts: string[] = [];

  constructor(private httpClient: HttpClient) {}

  getAllPosts() {
    return this.httpClient
      .get<Post[]>(environment.POSTS_API_URL)
      .pipe(
        map((posts) =>
          posts.filter((post) => !this.deletedPosts.includes(post.id))
        )
      );
  }

  getPostById(id: string) {
    return this.httpClient.get<Post>(environment.POSTS_API_URL + '/' + id);
  }

  deletePostById(id: string) {
    return this.httpClient.delete(environment.POSTS_API_URL + '/' + id).pipe(
      mergeMap(() => {
        this.deletedPosts.push(id);
        return this.getAllPosts();
      })
    );
  }
}
