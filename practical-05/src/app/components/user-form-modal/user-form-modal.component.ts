import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
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
export class UserFormModalComponent implements OnChanges {
  @Input() userData?: User;
  @ViewChild('closeBtn') closeBtn!: ElementRef;
  @Output() create = new EventEmitter<User>();
  @Output() delete = new EventEmitter<string>();
  @Output() update = new EventEmitter<User>();
  userForm!: FormGroup<{
    name: FormControl<string>;
    department: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    designation: FormControl<string>;
    salary: FormControl<string>;
  }>;

  ngOnChanges(changes: SimpleChanges) {
    this.userForm = new FormGroup({
      name: new FormControl(this.userData?.name ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      department: new FormControl(this.userData?.department ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      email: new FormControl(this.userData?.email ?? '', {
        nonNullable: true,
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl(this.userData?.password ?? '', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.pattern(
            /(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])(?=.*[a-z])(?=.*[A-Z]).{8,16}/
          ),
        ],
      }),
      designation: new FormControl(this.userData?.designation ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
      salary: new FormControl(this.userData?.salary ?? '', {
        nonNullable: true,
        validators: [Validators.required],
      }),
    });
  }

  handleUserCreateOrUpdate() {
    if (this.userForm.valid) {
      if (this.userData === undefined) {
        this.create.emit({
          ...this.userForm.getRawValue(),
          createdAt: new Date(),
        });
      } else {
        this.update.emit({
          ...this.userForm.getRawValue(),
          createdAt: this.userData.createdAt,
        });
      }

      if (this.closeBtn.nativeElement instanceof HTMLButtonElement) {
        this.closeBtn.nativeElement.click();
      }
      this.userForm.reset();
    } else {
      this.userForm.markAllAsTouched();
    }
  }

  handleUserDelete() {
    if (this.userData) {
      this.delete.emit(this.userData?.email);
      this.userForm.reset();
      this.closeBtn.nativeElement.click();
    }
  }
}
