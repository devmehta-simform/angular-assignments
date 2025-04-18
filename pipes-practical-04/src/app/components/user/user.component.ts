import { Component, Input, ViewChild } from '@angular/core';
import { User } from '../../types/user';
import { MaskPhonePipe } from '../../pipes/mask-phone.pipe';
import { UserModalService } from '../../services/user-modal.service';

@Component({
  selector: 'app-user',
  imports: [MaskPhonePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;

  constructor(private userModalService: UserModalService) {}

  handleModal() {
    this.userModalService.showModal(this.user);
  }
}
