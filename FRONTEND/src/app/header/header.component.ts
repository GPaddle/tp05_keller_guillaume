import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DisconnectPeople, UpdatePeople } from '../account/actions/account-actions';
import { AccountState } from '../account/states/account-state';
import { People } from '../form/people';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Select(AccountState.getAccount) people$: Observable<People>;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
