import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css',
})
export class AccordionComponent {
  isOpen: boolean = false;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) items!: string[];
}
