import { People } from "src/app/form/people";

export class UpdatePeople {
	static readonly type = "[People] Update"

	constructor(public payload: People) { }
}

export class GetPeople {
	static readonly type = "[People] Get"
}