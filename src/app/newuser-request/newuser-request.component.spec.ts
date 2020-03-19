import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserRequestComponent } from './newuser-request.component';

describe('NewuserRequestComponent', () => {
  let component: NewuserRequestComponent;
  let fixture: ComponentFixture<NewuserRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewuserRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewuserRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
