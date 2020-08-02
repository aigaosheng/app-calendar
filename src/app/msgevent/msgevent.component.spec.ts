import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MsgeventComponent } from "./msgevent.component";

describe('Msgevent.Component', () => {
  let component: MsgeventComponent;
  let fixture: ComponentFixture<MsgeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsgeventComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MsgeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
