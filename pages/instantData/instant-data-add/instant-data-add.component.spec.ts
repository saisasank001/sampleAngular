import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstantDataAddComponent } from './instant-data-add.component';

describe('InstantDataAddComponent', () => {
  let component: InstantDataAddComponent;
  let fixture: ComponentFixture<InstantDataAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstantDataAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstantDataAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
