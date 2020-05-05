import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantidComponent } from './instantid.component';

describe('InstantidComponent', () => {
  let component: InstantidComponent;
  let fixture: ComponentFixture<InstantidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
