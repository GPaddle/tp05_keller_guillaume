import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { CatalogService } from 'src/app/catalog.service';
import { Product } from 'src/app/products/product';
import { AddToCart } from '../actions/cart-actions';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css']
})
export class AddToCartButtonComponent implements OnInit {

  id: number = -1;
  quantity: number = 1;
  @Input() product: Product;
  addToCartForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store, private catalogService: CatalogService) {
    this.resetForm();

    if (this.product == null && this.id != -1) {
      if (!this.product) {
        this.catalogService.getProduct(this.id).subscribe( results => this.product = results[0]);
      }
    }
  }

  resetForm() {
    this.addToCartForm = this.formBuilder.group({
      quantity: new FormControl(1, [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  addToCart() {

    this.quantity = this.addToCartForm.value['quantity']

    let cartItem: CartItem = new CartItem(this.product, this.quantity)

    // console.log(cartItem);

    this.store.dispatch(new AddToCart(cartItem));

    this.resetForm();
  }

}
