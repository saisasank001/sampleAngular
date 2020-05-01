import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserAddComponent } from './update-user-add.component';

describe('UpdateUserAddComponent', () => {
  let component: UpdateUserAddComponent;
  let fixture: ComponentFixture<UpdateUserAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateUserAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
