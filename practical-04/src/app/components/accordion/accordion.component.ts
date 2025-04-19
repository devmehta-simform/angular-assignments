import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

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

  isTitle(title: unknown): title is string {
    return !!title && typeof title === 'string';
  }
  isItems(items: unknown): items is string[] {
    return (
      !!items &&
      Array.isArray(items) &&
      items.every((item) => typeof item === 'string')
    );
  }
}
