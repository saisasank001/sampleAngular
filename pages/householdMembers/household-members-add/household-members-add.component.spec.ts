import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdMembersAddComponent } from './household-members-add.component';

describe('HouseholdMembersAddComponent', () => {
  let component: HouseholdMembersAddComponent;
  let fixture: ComponentFixture<HouseholdMembersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdMembersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdMembersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
