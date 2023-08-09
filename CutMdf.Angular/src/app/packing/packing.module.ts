import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackingRoutingModule } from './packing-routing.module';
import { PackingComponent } from './packing/packing.component';
import { HttpClientModule } from '@angular/common/http';
import { PackingService } from './packing/paking.service';
import { SharedPipeModules } from '../Shared/pipe/shared-pipe.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PackingComponent
  ],
  imports: [
    CommonModule,
    PackingRoutingModule,
    HttpClientModule,
    SharedPipeModules,
    FormsModule
  ],
  providers: [
    PackingService
  ]
})
export class PackingModule { }
