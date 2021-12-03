import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CatalogService } from '../catalog.service';
import { Product } from './product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  catalog$!: Observable<Array<Product>>;

  @Input() searchInput: string = "";
  @Input() minPrice: string | undefined;
  @Input() maxPrice: string | undefined;

  categories: String[] = [];

  constructor(
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.catalog$ = this.catalogService.getCatalogue();
  }
}
