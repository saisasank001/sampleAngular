import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceClosureComponent } from './force-closure.component';

describe('ForceClosureComponent', () => {
  let component: ForceClosureComponent;
  let fixture: ComponentFixture<ForceClosureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceClosureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
