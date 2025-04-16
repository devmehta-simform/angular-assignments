import { Component, Input } from '@angular/core';
import { User } from '../../types/user';
import { MaskPhonePipe } from '../../pipes/mask-phone.pipe';

@Component({
  selector: 'app-user',
  imports: [MaskPhonePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
}
