import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { UpdatePeople } from 'src/app/account/actions/account-actions';
import { ApiService } from 'src/app/api.service';
import { Address } from '../address';
import { People } from '../people';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() address: Address;
  @Input() people: People;

  constructor(private api: ApiService, private store: Store) { }

  ngOnInit(): void {
  }

  suppress(): boolean {

    if (confirm("Etes vous sure de vouloir supprimer cette addresse ? Cette action est irréversible")) {

      let peopleId = this.store.selectSnapshot(state => state.account.account.id);


      this.api.removeAddress(this.address.id)
        .subscribe(event => {

          // console.log(event);

          peopleId && this.api.getUser(peopleId).subscribe(getEvent => {
            // console.log(getEvent.data);

            this.store.dispatch(new UpdatePeople(People.fromJSON(getEvent.data)))
          });

        });



      return this.people.removeAddress(this.address);
    }
    return false;
  }

}
