import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

class Book {
    constructor(public title: string) { }
}

@Component({
  selector: 'app-eventdb',
  //templateUrl: './eventdb.component.html',
  styleUrls: ['./eventdb.component.scss'],
  
  template: `
      <ul>
          <li *ngFor="let book of books | async">
              <pre>{{ book | json }}</pre>
          </li>
      </ul>
      <button (click)="addBook()">Add a book!</button>
      <button (click)="filterBooks()">Filter books</button>
  `
  
})

export class EventdbComponent implements OnInit  {

  bookRef: AngularFireList<any>;
  public books: Observable<any[]>;

  private bookCounter = 0;

  private filter = '';

  constructor(private db: AngularFireDatabase) {
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
  ngOnInit() {}
  
}

