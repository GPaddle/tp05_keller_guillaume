import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonnalPageComponent } from './personnal-page/personnal-page.component';
import { AddressComponent } from './address/address.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { DisconnectButtonComponent } from '../disconnect-button/disconnect-button.component';
import { CanActivatePersonnalPageGuard } from '../can-activate-personnal-page.guard';
import { CanActivateLoginPageGuard } from '../can-activate-login-page.guard';


const appChild: Routes = [
  {
    path: 'register',
    component: FormComponent,
    canActivate:[CanActivateLoginPageGuard]
  },
  {
    path: '',
    component: PersonnalPageComponent,
    canActivate:[CanActivatePersonnalPageGuard]
  },
];

@NgModule({
  declarations: [
    PersonnalPageComponent,
    AddAddressComponent,
    AddressComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,
  ]
})
export class FormModule { }
