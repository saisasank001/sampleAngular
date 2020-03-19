import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestNewUserComponent } from './request-new-user.component';

describe('RequestNewUserComponent', () => {
  let component: RequestNewUserComponent;
  let fixture: ComponentFixture<RequestNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestNewUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
