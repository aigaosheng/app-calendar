import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventdbComponent } from './eventdb.component';

describe('EventdbComponent', () => {
  let component: EventdbComponent;
  let fixture: ComponentFixture<EventdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdbComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
