import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-msgevent',
  templateUrl: './msgevent.component.html',
  styleUrls: ['./msgevent.component.scss'],
})
export class MsgeventComponent implements OnInit {
  @Input() eventdate: string;

  constructor() { }

  ngOnInit() { }

}
