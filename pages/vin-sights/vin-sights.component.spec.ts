import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VinSightsComponent } from './vin-sights.component';

describe('VinSightsComponent', () => {
  let component: VinSightsComponent;
  let fixture: ComponentFixture<VinSightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VinSightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VinSightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
