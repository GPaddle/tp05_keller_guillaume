import { Product } from "../products/product";

export class CartItem {

	product: Product;
	quantity: number = 1;

	constructor(product: Product, quantity: number) {
		this.product = product;
		this.quantity = quantity;
	}

	removeItem(quantity: number) {
		if (this.quantity>=quantity) {
			this.quantity -= quantity;
		}
	}
}
