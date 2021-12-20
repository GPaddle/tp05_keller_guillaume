import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Category } from 'src/app/products/category';
import { Product } from 'src/app/products/product';
import { RemoveFromCart } from '../actions/cart-actions';
import { CartItem } from '../cart-item';

@Component({
  selector: 'app-remove-from-cart-button',
  templateUrl: './remove-from-cart-button.component.html',
  styleUrls: ['./remove-from-cart-button.component.css']
})
export class RemoveFromCartButtonComponent implements OnInit {

  id: number;
  quantity: number = 1;
  @Input() cartItem: CartItem = new CartItem(new Product(3, "Pastèque", "Water Melon", 1, [new Category(1, "Fruit")], "🍉", []), 1);
  removeFromCartForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.resetForm();
  }

  resetForm() {
    this.removeFromCartForm = this.formBuilder.group({
      quantity: new FormControl(1, [Validators.required])
    })
  }

  ngOnInit(): void { }

  removeFromCart() {

    this.quantity = this.removeFromCartForm.value['quantity']

    this.store.dispatch(new RemoveFromCart({ cartItem: this.cartItem, quantity: this.quantity }));

    this.resetForm();
  }

}
