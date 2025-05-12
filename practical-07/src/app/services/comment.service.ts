import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../types/comment';
import { environment } from '../../environments/environment';
import { mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  constructor(private httpClient: HttpClient) {}

  getAllCommentsForPost(postId: number) {
    return this.httpClient.get<Comment[]>(
      environment.COMMENTS_API_URL + `?postId=${postId}`
    );
  }

  createCommentForPost(comment: Comment) {
    return this.httpClient
      .post(environment.COMMENTS_API_URL, comment)
      .pipe(mergeMap(() => this.getAllCommentsForPost(comment.postId)));
  }

  updateCommentForPost(
    commentId: number,
    postId: number,
    comment: Partial<Comment>
  ) {
    return this.httpClient
      .patch(
        environment.COMMENTS_API_URL + `/${commentId}?postId=${postId}`,
        comment
      )
      .pipe(mergeMap(() => this.getAllCommentsForPost(postId)));
  }

  deleteCommentForPost(postId: number, commentId: number) {
    return this.httpClient
      .delete(environment.COMMENTS_API_URL + `/${commentId}?postId=${postId}`)
      .pipe(mergeMap(() => this.getAllCommentsForPost(postId)));
  }
}
