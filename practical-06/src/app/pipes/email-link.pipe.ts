import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'emailLink',
})
export class EmailLinkPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string) {
    return this.sanitizer.bypassSecurityTrustHtml(
      `<a href='mailto:${value}' class='hover:underline'>${value}</a>`
    );
  }
}
