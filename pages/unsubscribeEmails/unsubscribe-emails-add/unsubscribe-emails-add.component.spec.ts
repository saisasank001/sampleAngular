import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeEmailsAddComponent } from './unsubscribe-emails-add.component';

describe('UnsubscribeEmailsAddComponent', () => {
  let component: UnsubscribeEmailsAddComponent;
  let fixture: ComponentFixture<UnsubscribeEmailsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscribeEmailsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeEmailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
