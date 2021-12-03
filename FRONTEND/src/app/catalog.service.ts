import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products/product';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CatalogService {

  observableProductArray: Observable<Product[]>;

  constructor(private httpClient: HttpClient) { }

  getCatalogue(): Observable<Product[]> {
    this.observableProductArray = this.httpClient.get<Array<Product>>(environment.productURL);
    return this.observableProductArray
  }

  getProduct(id: number) {
    if (!this.observableProductArray) {
      this.observableProductArray = this.httpClient.get<Array<Product>>(environment.productURL);
    }
    const tmp = this.observableProductArray.pipe(
      map(products =>products.filter(product => product.id == id)),
    );

    return tmp;
  }
}