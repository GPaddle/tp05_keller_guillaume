import { CartItem } from "../cart-item";

export class AddToCart {
	static readonly type = "[Product] Add"

	constructor(public payload: CartItem) { }
}

export class RemoveFromCart {
	static readonly type = "[Product] Remove"

	// constructor(public payload: Map<Product, Number>) { }
	constructor(public payload: {cartItem : CartItem, quantity: number}) { }
}
