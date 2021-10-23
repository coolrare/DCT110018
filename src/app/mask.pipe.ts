import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, len: number): string {
    if (value.length > len) {
      return value.substring(0, len) + '***';
    }
    return '***';
  }

}
