import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcfComponent } from './ncf.component';

describe('NcfComponent', () => {
  let component: NcfComponent;
  let fixture: ComponentFixture<NcfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
