import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsComponent } from './deals.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: DealsComponent}
];

@NgModule({
  declarations: [
    DealsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DealsModule { }
