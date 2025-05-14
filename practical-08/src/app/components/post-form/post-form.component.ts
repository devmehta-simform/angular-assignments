import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { merge, mergeMap, Observable, tap } from 'rxjs';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-post-form',
  imports: [RouterLink, FormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css',
})
export class PostFormComponent {
  title: string = '';
  body: string = '';
  id?: number;
  disableSubmit = false;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.paramMap
      .pipe(
        mergeMap((p) => {
          const id = p.get('id');
          if (id) {
            return this.postService.getPostById(parseInt(id)).pipe(
              tap((post) => {
                if (post) {
                  this.title = post.title;
                  this.body = post.body;
                  this.id = post.id;
                }
              })
            );
          }
          return new Observable();
        })
      )
      .subscribe();
  }

  handleFormSubmit() {
    this.disableSubmit = true;
    let obs: Observable<unknown> | undefined = undefined;
    if (!this.id) {
      const user = this.userService.getUser();
      if (user) {
        obs = this.postService.createPost({
          body: this.body,
          title: this.title,
          id: Date.now(),
          userId: user.id,
        });
      } else alert('login again');
    } else {
      obs = this.postService.updatePost(this.id, {
        title: this.title,
        body: this.body,
      });
    }
    if (obs) obs.subscribe(() => this.router.navigate(['/posts']));
  }
}
