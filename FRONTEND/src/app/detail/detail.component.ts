import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CatalogService } from '../catalog.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product$: Observable<Product[]>;
  id: number = 0;

  product: Product;

  constructor(private route: ActivatedRoute, private catalogService: CatalogService) {
    this.id = this.route.snapshot.params.id;

    if (!this.product$) {
      this.product$ = this.catalogService.getProduct(this.id);

      this.product$.subscribe((event : any)=> this.product = Product.fromJSON(event.data));
    }
  }

  ngOnInit(): void {
  }

}
