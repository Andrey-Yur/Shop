import { Pipe, PipeTransform } from '@angular/core';
import { AsYouType } from 'libphonenumber-js';
@Pipe({
  name: 'casttel',
})
export class CastTelPipe implements PipeTransform {
  transform(value: string, output: string): string {
    return (output = new AsYouType('CA').input(value));
  }
}
