import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrgentMessageComponent } from './urgent-message.component';

describe('UrgentMessageComponent', () => {
  let component: UrgentMessageComponent;
  let fixture: ComponentFixture<UrgentMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrgentMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrgentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
