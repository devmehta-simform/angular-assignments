import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../../types/post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  imports: [RouterLink],
  templateUrl: './post-list-item.component.html',
  styleUrl: './post-list-item.component.css',
})
export class PostListItemComponent {
  @Input({ required: true }) post!: Post;
  @Output() deletePost = new EventEmitter<number>();

  handleDeletePost(id: number) {
    this.deletePost.emit(id);
  }
}
