import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Post } from '../types/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getAllPosts() {
    return this.httpClient.get<Post[]>(environment.POSTS_API_URL);
  }

  getPostById(id: string) {
    return this.httpClient.get<Post>(environment.POSTS_API_URL + '/' + id);
  }
}
