import { Component } from '@angular/core';
import { UserTableComponent } from './components/user-table/user-table.component';

@Component({
  selector: 'app-root',
  imports: [UserTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practical-05';
}
