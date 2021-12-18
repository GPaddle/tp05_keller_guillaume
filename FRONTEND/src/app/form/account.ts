export class Account {

	login: string;
	password: string;

	constructor(
		login: string,
		password: string,
	) {
		this.login = login;
		this.password = password;
	}

	static fromJSON(item: any): Account {
		return new Account(
			item['login_'],
			item['hashedpassword']
		)
	}
}
