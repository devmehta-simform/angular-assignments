import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../types/post';
import { Observable, of, switchMap, zip } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../types/comment';
import { CommentComponent } from '../comment/comment.component';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../types/user';
@Component({
  selector: 'app-post-details',
  imports: [RouterLink, AsyncPipe, CommentComponent, FormsModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  post$!: Observable<[Post, User]>;
  comments$!: Observable<Comment[]>;
  commentBody: string = '';
  comment?: Comment;
  user?: User;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.post$ = this.postService
          .getPostById(parseInt(id))
          .pipe(
            switchMap((post) =>
              zip(of(post), this.userService.getUser(post.userId))
            )
          );
        this.comments$ = this.commentService.getAllCommentsForPost(
          parseInt(id)
        );
        this.user = this.userService.getUser();
      }
    });
  }

  handleEditForm(id: number) {
    this.router.navigate([`/post-form/${id}`]);
  }

  deletePost(id: number) {
    this.postService.deletePostById(id).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }

  createOrUpdateComment(postId: number) {
    if (this.comment) {
      this.comments$ = this.commentService.updateCommentForPost(
        this.comment.id,
        this.comment.postId,
        { body: this.commentBody }
      );
    } else {
      this.comments$ = this.commentService.createCommentForPost({
        body: this.commentBody,
        id: Date.now(),
        email: 'morty.smith@gmail.com',
        name: 'tmp',
        postId,
      });
    }
    this.commentBody = '';
    this.comment = undefined;
  }

  handleEditComment(comment: Comment) {
    this.comment = comment;
    this.commentBody = comment.body;
  }

  deleteComment(postId: number, commentId: number) {
    this.comments$ = this.commentService.deleteCommentForPost(
      postId,
      commentId
    );
  }
}
