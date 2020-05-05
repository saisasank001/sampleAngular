import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeclosureDataComponent } from './foreclosure-data.component';

describe('ForeclosureDataComponent', () => {
  let component: ForeclosureDataComponent;
  let fixture: ComponentFixture<ForeclosureDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForeclosureDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeclosureDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
