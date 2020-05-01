import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireDisasterResponseComponent } from './fire-disaster-response.component';

describe('FireDisasterResponseComponent', () => {
  let component: FireDisasterResponseComponent;
  let fixture: ComponentFixture<FireDisasterResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireDisasterResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireDisasterResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
