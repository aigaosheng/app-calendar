import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventdbComponent } from './eventdb.component';
import { EventdbRoutingModule } from './eventdb-routing';

@NgModule({
  declarations: [EventdbComponent],
  imports: [
    CommonModule,
    EventdbRoutingModule
  ]
})
export class EventdbModule { }
