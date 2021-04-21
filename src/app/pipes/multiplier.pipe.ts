import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplier',
})
export class MultiplierPipe implements PipeTransform {
  transform(value: number, multiple: number): unknown {
    return value * multiple;
  }
}

/**
 * 
 * 
 *{{2 | multiplier : 20}} 
 * 
 */
