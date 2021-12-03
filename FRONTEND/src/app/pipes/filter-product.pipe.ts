import { Pipe, PipeTransform } from '@angular/core';
import { FilterParameters } from '../filter-parameters';
import { Product } from '../products/product';

@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(products: Product[] | null, params: any[]): Product[] | null {
    return products ?
      products.filter(product => FilterParameters.isProductOk(product,params[0],params[1],params[2])) :
      products;
  }
}
