import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Account } from "src/app/form/account";
import { Contact } from "src/app/form/contact";
import { People } from "src/app/form/people";
import { DisconnectPeople, GetPeople, UpdatePeople } from "../actions/account-actions";
import { AccountStateModel } from "./account-state-model";

@State<AccountStateModel>({
	name: 'account',
	defaults: {
		account: null
		// new People(1, "ee", "e", "e", [], new Contact("oo", "oo"), new Account("bill.gates", "azerty")),
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

	@Action(DisconnectPeople)
	disconnectPeople(
		{ patchState }: StateContext<AccountStateModel>,
	) {
		patchState({
			account: null,
		});
	}

}
