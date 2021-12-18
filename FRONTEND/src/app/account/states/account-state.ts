import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { People } from "src/app/form/people";
import { GetPeople, UpdatePeople } from "../actions/account-actions";
import { AccountStateModel } from "./account-state-model";

@State<AccountStateModel>({
	name: 'account',
	defaults: {
		account: null,
	},
})

@Injectable()
export class AccountState {

	@Selector()
	static getAccount(state: AccountStateModel) {
		return state.account;
	}

	@Action(UpdatePeople)
	updatePeople(
		{ patchState }: StateContext<AccountStateModel>,
		{ payload }: UpdatePeople
	) {
		patchState({
			account: payload,
		});
	}
}
