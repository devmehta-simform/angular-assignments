import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comment } from '../../types/comment';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css',
})
export class CommentComponent {
  @Input({ required: true }) comment!: Comment;
  @Output() deleteComment = new EventEmitter<void>();
  @Output() editComment = new EventEmitter<void>();

  handleEdit() {
    this.editComment.emit();
  }

  handleDelete() {
    this.deleteComment.emit();
  }
}
