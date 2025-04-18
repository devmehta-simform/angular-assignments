import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskPhone',
})
export class MaskPhonePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if (!!value && typeof value === 'string') {
      const parts = value.split('');
      const newPhone = parts.filter((part, i) => {
        return !Number.isNaN(parseInt(part));
      });
      return (
        newPhone[0] +
        new Array(newPhone.length - 3).fill('*').join('') +
        newPhone[newPhone.length - 2] +
        newPhone[newPhone.length - 1]
      );
    }
    throw new Error('string expected');
  }
}
