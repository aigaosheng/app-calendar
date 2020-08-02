// home.module.ts

import { Component, ViewChild, AfterViewInit } from '@angular/core';
//import { MsgeventComponent } from "../msgevent/MsgeventComponent";
import { ModalController } from '@ionic/angular';

import {
  CalendarComponentOptions
} from 'ion2-calendar'

import { CalendarResult } from 'ion2-calendar';


@Component({
  selector: 'app-home',
  //templateUrl: 'home.page.html',
  template: `
    <hr>
    <h3 style="text-align: center;">basic</h3>
    <ion-calendar [(ngModel)]="date"
                  (onChange)="onChange($event)"
                  (onSelect)="onSelect($event)"
                  [options]="options"
                  type="string"
                  format="YYYY-MM-DD">
    </ion-calendar>
    `,
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  date: string = '2018-01-01';
  type: 'string';
  dateNow: string;

  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
  };

  constructor(public modalCtrl: ModalController) {
    this.dateNow = 'Start';
  }

  onChange($event) {
    console.log('onChange', $event);
  }

  onSelect($event) {
    console.log('onSelect', $event);

    this.dateNow = new Date($event['time']).toLocaleDateString();
  }
}
