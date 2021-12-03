import { MetaData } from "../meta-data";

export class Product {

	id : number;
	title: string;
	description: string;
	price: number;
	categories: Array<string>;
	icon: string;
	metaData: Array<MetaData>;

	constructor(id: number, title: string, description: string, price: number, categories: Array<string>, icon: string, metaData: Array<MetaData>) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.categories = categories;
		this.icon = icon;
		this.metaData = metaData;
	}

}
