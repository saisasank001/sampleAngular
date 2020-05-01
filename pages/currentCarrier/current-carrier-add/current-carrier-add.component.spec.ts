import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCarrierAddComponent } from './current-carrier-add.component';

describe('CurrentCarrierAddComponent', () => {
  let component: CurrentCarrierAddComponent;
  let fixture: ComponentFixture<CurrentCarrierAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentCarrierAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentCarrierAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
