import { TestBed } from '@angular/core/testing';

import { PersonalLineService } from './personal-line.service';

describe('PersonalLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalLineService = TestBed.get(PersonalLineService);
    expect(service).toBeTruthy();
  });
});
