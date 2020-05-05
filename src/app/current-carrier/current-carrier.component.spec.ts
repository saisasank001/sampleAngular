import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCarrierComponent } from './current-carrier.component';

describe('CurrentCarrierComponent', () => {
  let component: CurrentCarrierComponent;
  let fixture: ComponentFixture<CurrentCarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
