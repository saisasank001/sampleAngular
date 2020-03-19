import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementCloneComponent } from './announcement-clone.component';

describe('AnnouncementCloneComponent', () => {
  let component: AnnouncementCloneComponent;
  let fixture: ComponentFixture<AnnouncementCloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementCloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementCloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
