import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAdvancedLinkingComponent } from './filter-advanced-linking.component';

describe('FilterAdvancedLinkingComponent', () => {
  let component: FilterAdvancedLinkingComponent;
  let fixture: ComponentFixture<FilterAdvancedLinkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAdvancedLinkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAdvancedLinkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
