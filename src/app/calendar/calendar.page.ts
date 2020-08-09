import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message/message.service";

import { CalendarComponentOptions } from 'ion2-calendar'
import { EventdbComponent } from '../eventdb/eventdb.component'
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { stringify } from 'querystring';

class Book {
    constructor(public title: string) { }
}

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
  date: string[];
  options: CalendarComponentOptions = {
    from: new Date(2010, 1, 2),
    'pickMode': 'multi',
    'color': 'secondary',
    'daysConfig': [{'date':new Date(2020,1,2),  'subTitle':'world','marked':true}],
  };


  dateNow: string;
  eventdate: Date;


  bookRef: AngularFireList<any>;
  public books: Observable<any[]>;

  private bookCounter = 0;

  private filter = '';

  constructor(private messageService: MessageService, private db: AngularFireDatabase) {
    this.bookRef = db.list('/events');
    this.books = this.bookRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
 

  public addBook(): void {
    const newBook = new Book(`My book #${this.bookCounter++}`);
    this.bookRef.push(newBook);
}

public filterBooks(): void {
    this.bookRef = this.db.list('/events',ref => ref.orderByChild('title').equalTo('My book #0'));
}
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

  //
  textValue: string = 'initial value';
  log: string = '';

  logText(value: string): void {
    this.log += `Text changed to '${value}'\n`;
  }

  //
  dateValue: string = 'initial date value';
  logDate: Date = new Date(2020,7,0);

  logTextDate(value: Date): void {
    this.logDate = value;
  }

}