import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { ReactiveFormsModule } from '@angular/forms';


const appChild: Routes = [
  {
    path: '',
    component: CartDetailComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,
]
})
export class CartModule { }
