import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { User } from '../../types/user';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form-modal',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user-form-modal.component.html',
  styleUrl: './user-form-modal.component.css',
})
export class UserFormModalComponent {
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  @Output() create = new EventEmitter<User>();

  userForm = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    department: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(
          /(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])(?=.*[a-z])(?=.*[A-Z]).{8,16}/
        ),
      ],
    }),
    designation: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
    salary: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required],
    }),
  });

  handleUserCreate() {
    if (this.userForm.valid) {
      this.create.emit({
        ...this.userForm.getRawValue(),
        createdAt: new Date(),
      });
      if (this.closeBtn.nativeElement instanceof HTMLButtonElement) {
        this.closeBtn.nativeElement.click();
      }
      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
