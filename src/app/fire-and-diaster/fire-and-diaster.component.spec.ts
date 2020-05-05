import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireAndDiasterComponent } from './fire-and-diaster.component';

describe('FireAndDiasterComponent', () => {
  let component: FireAndDiasterComponent;
  let fixture: ComponentFixture<FireAndDiasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireAndDiasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireAndDiasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
