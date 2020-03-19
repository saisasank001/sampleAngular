import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserEmailComponent } from './update-user-email.component';

describe('UpdateUserEmailComponent', () => {
  let component: UpdateUserEmailComponent;
  let fixture: ComponentFixture<UpdateUserEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
