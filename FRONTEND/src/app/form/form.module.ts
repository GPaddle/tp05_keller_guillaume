import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonnalPageComponent } from './personnal-page/personnal-page.component';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './add-address/add-address.component';


const appChild: Routes = [
  {
    path: 'register',
    component: FormComponent,
  },
  {
    path: 'personnalPage',
    component: PersonnalPageComponent,
  },
];

@NgModule({
  declarations: [
    PersonnalPageComponent,
    AddAddressComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,
  ]
})
export class FormModule { }
