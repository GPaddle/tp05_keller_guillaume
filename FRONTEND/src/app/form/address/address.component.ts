import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor() { }

  ngOnInit(): void {
  }

  suppress(): boolean {

    if (confirm("Etes vous sure de vouloir supprimer cette addresse ? Cette action est irréversible")) {
      return this.people.removeAddress(this.address);
    }
    return false;
  }

}
