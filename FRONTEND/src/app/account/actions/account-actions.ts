import { People } from "src/app/form/people";

export class UpdatePeople {
	static readonly type = "[People] Update"

	constructor(public payload: People) { }
}

export class DisconnectPeople {
	static readonly type = "[People] Remove"

	constructor() { }
}

export class GetPeople {
	static readonly type = "[People] Get"
}