import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartItem } from '../cart-item';
import { CartState } from '../states/cart-state';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  @Select(CartState.getNbProduct) nb$: Observable<number>;
  @Select(CartState.getListProducts) cartItems$: Observable<CartItem[]>;

  empty: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


}
