import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfidentialityAgreementComponent } from './confidentiality-agreement.component';

describe('ConfidentialityAgreementComponent', () => {
  let component: ConfidentialityAgreementComponent;
  let fixture: ComponentFixture<ConfidentialityAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfidentialityAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfidentialityAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
