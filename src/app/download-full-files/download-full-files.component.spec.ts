import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadFullFilesComponent } from './download-full-files.component';

describe('DownloadFullFilesComponent', () => {
  let component: DownloadFullFilesComponent;
  let fixture: ComponentFixture<DownloadFullFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadFullFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadFullFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
