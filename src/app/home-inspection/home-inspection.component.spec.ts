import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInspectionComponent } from './home-inspection.component';

describe('HomeInspectionComponent', () => {
  let component: HomeInspectionComponent;
  let fixture: ComponentFixture<HomeInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
