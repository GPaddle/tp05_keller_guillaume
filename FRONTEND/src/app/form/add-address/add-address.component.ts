import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from '../address';
import { People } from '../people';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  addAddressForm: FormGroup;

  @Input() people : People;

  constructor(private formBuilder: FormBuilder) {
    this.addAddressForm = this.formBuilder.group({
        street: new FormControl('', [Validators.required]),
        postalCode: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`^[0-9]{5}$`)])),
        city: new FormControl('', Validators.compose([Validators.required, Validators.pattern(`^([a-zA-Z\\u0080-\\u024F]+(?:. |-| |'))*[a-zA-Z\\u0080-\\u024F]*$`)])),
        country: new FormControl('', [Validators.required])
    });
  }


  submit() {

    const address = new Address(
      this.addAddressForm.value.street,
      this.addAddressForm.value.postalCode,
      this.addAddressForm.value.city,
      this.addAddressForm.value.country,
    );
    this.people.addresses.push(address);

    this.addAddressForm.reset();
  }


  ngOnInit(): void {}

}
