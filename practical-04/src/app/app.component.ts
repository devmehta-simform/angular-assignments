import { Component } from '@angular/core';
import { DepartmentListComponent } from './components/department-list/department-list.component';

@Component({
  selector: 'app-root',
  imports: [DepartmentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practical-04';
}
