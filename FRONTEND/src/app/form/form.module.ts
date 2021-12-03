import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { ReactiveFormsModule } from '@angular/forms';


const appChild: Routes = [
  {
    path: '',
    component: FormComponent,
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
export class FormModule { }
