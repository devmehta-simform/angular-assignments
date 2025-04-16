import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserModalService } from '../../services/user-modal.service';
import { Observable } from 'rxjs';
import { User } from '../../types/user';

@Component({
  selector: 'app-user-modal',
  imports: [],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.css',
})
export class UserModalComponent {
  @ViewChild('userModalDialogRef')
  userModalDialogRef!: ElementRef<HTMLDialogElement>;
  userModal$!: Observable<User | null>;
  user: User | null = null;

  constructor(private userModalService: UserModalService) {
    this.userModal$ = this.userModalService.getUserModal$();
    this.userModal$.subscribe((user) => {
      this.user = user;
      if (user) {
        this.open();
      } else {
        this.close();
      }
    });
  }

  open() {
    this.userModalDialogRef.nativeElement.showModal();
  }

  close() {
    this.userModalDialogRef.nativeElement.close();
  }
}
