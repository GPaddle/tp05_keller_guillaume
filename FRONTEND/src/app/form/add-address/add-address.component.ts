import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UpdatePeople } from 'src/app/account/actions/account-actions';
import { AccountState } from 'src/app/account/states/account-state';
import { ApiService } from 'src/app/api.service';
import { Address } from '../address';
import { People } from '../people';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  addAddressForm: FormGroup;

  @Select(AccountState.getAccount) people$: Observable<People>;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private store: Store) {
    this.addAddressForm = this.formBuilder.group({
      street: new FormControl('', [Validators.required]),
      postalCode: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`^[0-9]{5}$`)])),
      city: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`^([a-zA-Z\\u0080-\\u024F]+(?:. |-| |'))*[a-zA-Z\\u0080-\\u024F]*$`)])),
      country: new FormControl('', [Validators.required])
    });
  }


  submit() {

    const address = new Address(
      -1,
      this.addAddressForm.value.street,
      this.addAddressForm.value.postalCode,
      this.addAddressForm.value.city,
      this.addAddressForm.value.country,
    );

    let peopleId = this.store.selectSnapshot(state => state.account.account.id);


    peopleId && this.api.postAddress(address, peopleId)
      .subscribe(event => {

        // console.log(event);

        peopleId && this.api.getUser(peopleId).subscribe(getEvent => {
          // console.log(getEvent.data);

          this.store.dispatch(new UpdatePeople(People.fromJSON(getEvent.data)))
          this.addAddressForm.reset();
        });

      });
  }


  ngOnInit(): void { }

}
