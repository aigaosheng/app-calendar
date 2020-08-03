import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message/message.service";

import {
  CalendarComponentOptions
} from 'ion2-calendar'

@Component({
  selector: 'app-calendar',
  templateUrl:'calendar.page.html',
  styleUrls: ['calendar.page.scss'],
  providers: [ MessageService ],
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
export class CalendarPage implements OnInit {
  type: 'string';
  date: string = '2018-01-01';
  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1),
  };
  dateNow: string;
  eventdate: Date;

  constructor(private messageService: MessageService) {}
 

  getMessage(): void {
    this.eventdate = this.messageService.getMsg();
  }
  onChange($event) {
    console.log($event);
  }

  onSelect($event) {
    console.log('onSelect', $event);

    this.dateNow = new Date($event['time']).toLocaleDateString();
  }

  ngOnInit () {
    this.getMessage()
  }
}