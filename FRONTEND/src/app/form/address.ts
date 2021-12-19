export class Address {
	id: number;
	street: string;
	postal_code: string;
	city: string;
	country: string;

	constructor(
		id: number,
		street: string,
		postal_code: string,
		city: string,
		country: string
	) {
		this.id = id;
		this.street = street;
		this.postal_code = postal_code;
		this.city = city;
		this.country = country;
	}

	static fromJSON(item: any[]): Address[] {
		item.map(address => new Address(
			address['id'],
			address['street'],
			address['postal_code'],
			address['city'],
			address['country'])
		)

		return item;
	}
}
