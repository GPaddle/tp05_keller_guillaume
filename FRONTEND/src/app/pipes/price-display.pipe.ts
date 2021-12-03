import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceDisplay'
})
export class PriceDisplayPipe implements PipeTransform {

  transform(value: number | string): string {
    let numberValue : Number = +value;
    return numberValue.toFixed(2).toString();
  }

  

}
