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

}
