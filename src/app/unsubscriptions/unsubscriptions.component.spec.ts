import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscriptionsComponent } from './unsubscriptions.component';

describe('UnsubscriptionsComponent', () => {
  let component: UnsubscriptionsComponent;
  let fixture: ComponentFixture<UnsubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnsubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
