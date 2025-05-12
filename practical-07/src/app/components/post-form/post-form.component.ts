import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
@Component({
  selector: 'app-post-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  title: string = '';
  body: string = '';
  disableSubmit = false;

  constructor(private postService: PostService, private router: Router) {}

  handleFormSubmit() {
    this.disableSubmit = true;
    this.postService
      .createPost({
        body: this.body,
        title: this.title,
        id: Date.now().toString(),
        userId: '1232',
      })
      .subscribe(() => this.router.navigate(['/posts']));
  }
}
