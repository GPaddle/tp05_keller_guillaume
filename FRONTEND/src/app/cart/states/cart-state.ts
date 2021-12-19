import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AddToCart, RemoveFromCart } from "../actions/cart-actions";
import { CartItem } from "../cart-item";
import { CartStateModel } from "./cart-state-model";

@State<CartStateModel>({
	name: 'cartItems',
	defaults: {
		cartItems: [],
	},
})

@Injectable()
export class CartState {

	@Selector()
	static getListProducts(state: CartStateModel) {
		return state.cartItems;
	}


	@Selector()
	static getNbProduct(state: CartStateModel) {

		let totalQuantity: number = 0;
		state.cartItems.forEach(currentCartItem => {
			totalQuantity += currentCartItem.quantity
		})

		return totalQuantity;
	}

	@Action(AddToCart)
	add(
		{ getState, patchState }: StateContext<CartStateModel>,
		{ payload }: AddToCart
	) {
		const state = getState();

		patchState({
			cartItems: [...state.cartItems, payload],
		});
	}


	@Action(RemoveFromCart)
	remove(
		{ getState, patchState }: StateContext<CartStateModel>,
		{ payload }: RemoveFromCart
	) {
		const state = getState();

		// console.log(payload);

		if (payload.cartItem.quantity - payload.quantity > 0) {
			const newCartItem = new CartItem(payload.cartItem.product, payload.cartItem.quantity - payload.quantity)

			let index = state.cartItems.findIndex(element => element == payload.cartItem);

			let newCartItems = state.cartItems.slice();
			if (index != -1) {
				newCartItems[index] = newCartItem;
			}
			patchState({
				cartItems: [...newCartItems]
			});
		} else {

			const cartItemsFiltered = state.cartItems.filter(function (value, index, arr) {
				return value != payload.cartItem;
			});

			patchState({
				cartItems: [...cartItemsFiltered]
			});
		}


	}

}
