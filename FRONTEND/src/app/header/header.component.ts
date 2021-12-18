import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AccountState } from '../account/states/account-state';
import { People } from '../form/people';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Select(AccountState.getAccount) people$: Observable<People>;

  constructor() { }

  ngOnInit(): void {
  }

}
