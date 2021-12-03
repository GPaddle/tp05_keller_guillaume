import { Product } from "./products/product";

const DEFAULT_PRICE = -1;
const DEFAULT_QUERY_STRING = "";
export class FilterParameters {
	minPrice: number;
	maxPrice: number;
	queryString: string;

	constructor(minPrice: number = DEFAULT_PRICE, maxPrice: number = DEFAULT_PRICE, queryString: string = DEFAULT_QUERY_STRING) {
		this.minPrice = minPrice;
		this.maxPrice = maxPrice;
		this.queryString = queryString;
	}

	static isProductOk(product: Product, queryString: string = DEFAULT_QUERY_STRING, minPrice: number = DEFAULT_PRICE, maxPrice: number = DEFAULT_PRICE): boolean {
		return this.isPriceOk(product.price, minPrice, maxPrice) && this.isTitleOk(product.title, queryString)
	}

	static isPriceOk(price: number, minPrice: number = DEFAULT_PRICE, maxPrice: number = DEFAULT_PRICE): boolean {

		let b: boolean = true;
		if (minPrice != DEFAULT_PRICE) {
			b = b && minPrice <= price;
		}

		if (maxPrice != DEFAULT_PRICE) {
			b = b && maxPrice >= price;
		}

		return b;
	}

	static isTitleOk(title: string, queryString: string = DEFAULT_QUERY_STRING): boolean {

		if (queryString) {
			return title.toLowerCase().includes(queryString.toLowerCase());
		} else {
			return true;
		}
	}
}
