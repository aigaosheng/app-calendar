// home.module.ts

import { Component } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  dateMulti: string[];//= ['2018-01-01', '2018-01-02', '2018-01-05'];
  type: 'string';
  
  optionsMulti: CalendarComponentOptions = {
    from: new Date(2020,0,1),
    pickMode: 'multi'
  };

  onChange($event) {
    console.log($event);
  }

  constructor() { }
}