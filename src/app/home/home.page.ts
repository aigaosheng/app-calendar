// home.module.ts

import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import {
  CalendarComponentOptions
} from 'ion2-calendar'

@Component({
  selector: 'app-home',
  templateUrl:'home.page.html',
  styleUrls: ['home.page.scss'],
  /*template: `
    <hr>
    <h3 style="text-align: center;">basic</h3>
    <ion-calendar [(ngModel)]="date"
                  (onChange)="onChange($event)"
                  [options]="options"
                  type="string"
                  format="YYYY-MM-DD">
    </ion-calendar>
  `*/
})

export class HomePage {
  date: string;
  type: 'string';

  constructor() { }

  onChange($event) {
    console.log($event);
  }
}