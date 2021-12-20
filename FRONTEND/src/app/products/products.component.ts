import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CatalogService } from '../catalog.service';
import { Category } from './category';
import { Product } from './product';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  catalog$!: Observable<Array<Product>>;
  catalog: Array<Product>;

  @Input() searchInput: string = "";
  @Input() minPrice: string | undefined;
  @Input() maxPrice: string | undefined;

  categories: Category[] = [];

  constructor(
    private catalogService: CatalogService,
  ) { }

  ngOnInit() {
    this.catalog$ = this.catalogService.getCatalogue();

    this.catalog$.subscribe((event: any) => this.catalog = event.data.map((product: any) => Product.fromJSON(product)));
  }
}
