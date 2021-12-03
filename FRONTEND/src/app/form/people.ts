import { Account } from "./account";
import { Address } from "./address";
import { Contact } from "./contact";

export class People {

	lastName: string;
	firstName: string;
	civility: string;
	addresses: Address[] = [];
	contact: Contact;
	account: Account;

	constructor(
		lastName: string,
		firstName: string,
		civility: string,
		address: Address,
		contact: Contact,
		account: Account
	) {
		this.lastName = lastName;
		this.firstName = firstName;
		this.civility = civility;
		this.addresses.push(address);
		this.contact = contact;
		this.account = account;
	}

	removeAddress(address: Address): boolean {

		let index : number = this.addresses.findIndex(existingAddress => address == existingAddress);
		if (index == -1) {
			return false;
		}

		this.addresses.splice(index, 1);
		
		return true;
	}
	

}
