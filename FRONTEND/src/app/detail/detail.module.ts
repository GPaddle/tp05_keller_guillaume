import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './detail.component';


const appChild: Routes = [
  {
    path: '',
    component: DetailComponent,
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
export class DetailModule { }
