export class MetaData {
	name: string;
	value: string;

	constructor(name: string, value: string) {
		this.name = name;
		this.value = value;
	}

	static fromJSON(item: any): MetaData {
		return new MetaData(
			item['name_'],
			item['value_'],
		);
	}
}
