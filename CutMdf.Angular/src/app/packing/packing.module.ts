import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackingRoutingModule } from './packing-routing.module';
import { PackingComponent } from './packing/packing.component';


@NgModule({
  declarations: [
    PackingComponent
  ],
  imports: [
    CommonModule,
    PackingRoutingModule
  ]
})
export class PackingModule { }
