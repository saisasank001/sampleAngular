import { TestBed } from '@angular/core/testing';

import { PersonalLineProductsService } from './personal-line-products.service';

describe('PersonalLineProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonalLineProductsService = TestBed.get(PersonalLineProductsService);
    expect(service).toBeTruthy();
  });
});
