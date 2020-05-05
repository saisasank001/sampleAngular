import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterIndividualSearchComponent } from './filter-individual-search.component';

describe('FilterIndividualSearchComponent', () => {
  let component: FilterIndividualSearchComponent;
  let fixture: ComponentFixture<FilterIndividualSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterIndividualSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterIndividualSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
