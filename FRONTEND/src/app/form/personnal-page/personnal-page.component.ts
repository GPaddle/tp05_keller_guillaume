import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { DisconnectPeople, UpdatePeople } from 'src/app/account/actions/account-actions';
import { AccountState } from 'src/app/account/states/account-state';
import { People } from '../people';

@Component({
  selector: 'app-personnal-page',
  templateUrl: './personnal-page.component.html',
  styleUrls: ['./personnal-page.component.css']
})
export class PersonnalPageComponent implements OnInit {

  @Select(AccountState.getAccount) people$: Observable<People>;
  people: People;

  constructor() { }

  ngOnInit(): void {
  }

}
