import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EventdbComponent } from './eventdb.component';

const routes: Routes = [
  {
    path: '',
    component: EventdbComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EventdbRoutingModule {}
