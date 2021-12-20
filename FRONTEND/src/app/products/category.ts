export class Category {

	id : number;
	name: string;

	constructor(id: number, name_: string) {
		this.id = id;
		this.name = name_;
	}

	
	static fromJSON(item: any): Category {
		return new Category(
			item['id'],
			item['name_'],
		);
	}

}
