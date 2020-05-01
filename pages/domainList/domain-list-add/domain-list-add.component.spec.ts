import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainListAddComponent } from './domain-list-add.component';

describe('DomainListAddComponent', () => {
  let component: DomainListAddComponent;
  let fixture: ComponentFixture<DomainListAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainListAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
