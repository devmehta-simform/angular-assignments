import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { catchError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../../types/user';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  error?: string;
  authForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ],
    }),
  });

  constructor(private userService: UserService, private router: Router) {
    this.authForm.valueChanges.subscribe(() => (this.error = undefined));
  }

  handleLogin() {
    const form = this.authForm.getRawValue();
    if (this.authForm.valid) {
      this.userService
        .loginUser(form.email, form.password)
        .pipe(
          catchError((err) => {
            this.error = err.error;
            return new Observable<undefined>();
          })
        )
        .subscribe((user) => {
          if (user) {
            this.error = undefined;
            this.userService.saveUser(user);
            this.authForm.reset();
            this.router.navigate(['/posts']);
          }
        });
    } else {
      this.authForm.markAllAsTouched();
    }
  }
}
