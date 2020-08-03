import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public msg: Date;

  constructor() { 
    this.msg = new Date(2020, 0, 1);
    //this.msg[1] = new Date(2020, 7, 5)
  }

  getMsg(): Date {
    return this.msg;
  }
}
