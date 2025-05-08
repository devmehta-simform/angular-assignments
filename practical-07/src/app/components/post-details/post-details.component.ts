import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../types/post';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../types/comment';
@Component({
  selector: 'app-post-details',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css',
})
export class PostDetailsComponent implements OnInit {
  post$!: Observable<Post>;
  comments$!: Observable<Comment[]>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.post$ = this.postService.getPostById(id);
        this.comments$ = this.commentService.getAllCommentsForPost(id);
      }
    });
  }
}
