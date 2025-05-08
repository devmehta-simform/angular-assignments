import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../types/comment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getAllCommentsForPost(postId: string) {
    return this.httpClient.get<Comment[]>(
      environment.COMMENTS_API_URL + `?postId=${postId}`
    );
  }
}
