export class Address {
	street: string;
	postalCode: string;
	city: string;
	country: string;

	constructor(
		street: string,
		postalCode: string,
		city: string,
		country: string
	) {
		this.street = street;
		this.postalCode = postalCode;
		this.city = city;
		this.country = country;
	}

	static fromJSON(item: any[]): Address[] {
		item.map(address => new Address(
			address['street'],
			address['postal_code'],
			address['city'],
			address['country'])
		)

		return item;
	}
}
