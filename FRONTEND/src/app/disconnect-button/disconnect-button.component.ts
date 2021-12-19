import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DisconnectPeople } from '../account/actions/account-actions';

@Component({
  selector: 'app-disconnect-button',
  templateUrl: './disconnect-button.component.html',
  styleUrls: ['./disconnect-button.component.css']
})
export class DisconnectButtonComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  disconnect() {
    if (confirm("Etes vous sure de vouloir vous déconnecter ?")) {
      this.store.dispatch(new DisconnectPeople());
    }

  }

}
