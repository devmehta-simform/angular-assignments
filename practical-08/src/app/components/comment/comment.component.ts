import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../types/comment';
import { User } from '../../types/user';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  @Input({ required: true }) comment!: Comment;
  @Input({ required: true }) user?: User;
  @Output() deleteComment = new EventEmitter<void>();
  @Output() editComment = new EventEmitter<void>();

  handleEdit() {
    this.editComment.emit();
  }

  handleDelete() {
    this.deleteComment.emit();
  }
}
