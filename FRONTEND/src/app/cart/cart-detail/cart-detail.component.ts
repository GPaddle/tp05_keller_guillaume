import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { EmptyCart } from '../actions/cart-actions';
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
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  buyCart() {
    if (confirm("Vous allez acheter l'intégralité des produits de votre panier, merci de confirmer l'achat")) { 
      this.store.dispatch(new EmptyCart());
    }
  }


}
