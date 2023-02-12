import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miCustom'
})
export class MiCustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
