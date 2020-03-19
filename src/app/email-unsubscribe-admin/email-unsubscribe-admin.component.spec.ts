import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailUnsubscribeAdminComponent } from './email-unsubscribe-admin.component';

describe('EmailUnsubscribeAdminComponent', () => {
  let component: EmailUnsubscribeAdminComponent;
  let fixture: ComponentFixture<EmailUnsubscribeAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailUnsubscribeAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailUnsubscribeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
