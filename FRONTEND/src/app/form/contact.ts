export class Contact {
	email: String;
	phoneNumber: String;

	constructor(
		email: String,
		phoneNumber: String
	) {
		this.email = email;
		this.phoneNumber = phoneNumber;
	}
	
	static fromJSON(item: any): Contact {
		return new Contact(
			item['email'],
			item['phone_number']
		)
	}
}
