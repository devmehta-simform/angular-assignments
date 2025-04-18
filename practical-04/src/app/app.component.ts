import { Component } from '@angular/core';
import { AccordionComponent } from './components/accordion/accordion.component';

@Component({
  selector: 'app-root',
  imports: [AccordionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'practical-04';
}
