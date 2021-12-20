import { MetaData } from "../meta-data";
import { Category } from "./category";

export class Product {

	id: number;
	title: string;
	description: string;
	price: number;
	categories: Array<any>;
	icon: string;
	metadata: Array<MetaData>;

	constructor(id: number, title: string, description: string, price: number, categories: Array<any>, icon: string, metadata: Array<MetaData>) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.categories = categories;
		this.icon = icon;
		this.metadata = metadata;
	}

	static fromJSON(item: any): Product {
		return new Product(
			item['id'],
			item['title'],
			item['description_'],
			item['price'],
			item['categories'].map((category: any) => Category.fromJSON(category)),
			item['icon'],
			item['metadata'].map((metaData: any) => MetaData.fromJSON(metaData))
		);

	}

}
