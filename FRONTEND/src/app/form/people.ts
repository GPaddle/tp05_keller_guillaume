import { Account } from "./account";
import { Address } from "./address";
import { Contact } from "./contact";

export class People {

	id: number | null;
	lastName: string;
	firstName: string;
	civility: string;
	addresses: Address[] = [];
	contact: Contact;
	account: Account;

	constructor(
		id: number | null,
		lastName: string,
		firstName: string,
		civility: string,
		addresses: Address[],
		contact: Contact,
		account: Account
	) {
		this.id = id;
		this.lastName = lastName;
		this.firstName = firstName;
		this.civility = civility;
		this.addresses = addresses;
		this.contact = contact;
		this.account = account;
	}

	removeAddressByIndex(index: number): People {
		if (index < 0) {
			return this;
		}

		const addressTarget = this.addresses[index];
		const newAddresses = this.addresses.filter(element => element != addressTarget);

		console.log(newAddresses);


		return new People(this.id, this.lastName, this.firstName, this.civility, newAddresses, this.contact, this.account);
	}

	removeAddress(address: Address): boolean {

		// let index: number = this.addresses.findIndex(existingAddress => address == existingAddress);
		// if (index == -1) {
		// 	return false;
		// }

		// this.addresses.splice(index, 1);

		console.log(address.id);
		

		return true;
	}

	static fromJSON(item: any): People {
		return new People(
			item['id'],
			item['lastname'],
			item['firstname'],
			item['civility'],
			Address.fromJSON(item['addresses']),
			Contact.fromJSON(item['contact']),
			Account.fromJSON(item['account'])
		);
	}

}
