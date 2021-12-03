import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CartState } from '../states/cart-state';

@Component({
  selector: 'app-floating-cart-button',
  templateUrl: './floating-cart-button.component.html',
  styleUrls: ['./floating-cart-button.component.css']
})
export class FloatingCartButtonComponent implements OnInit {

  @Select(CartState.getNbProduct) nb$: Observable<number>;
  constructor() { }

  ngOnInit(): void {
  }

}
