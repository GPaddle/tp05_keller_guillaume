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

  private extractData(res: Response): any {
    const body = res;
    return body || {};
  }

  getCatalogue(): Observable<any> {
    this.observableProductArray = this.httpClient.get<Array<Product>>(environment.productURL);
    return this.observableProductArray;
  }
  
  getProduct(id: number): Observable<any> {
    this.observableProductArray = this.httpClient.get<Array<Product>>(environment.productURL + "/" + id);
    return this.observableProductArray;
  }
}