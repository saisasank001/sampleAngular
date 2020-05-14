import { TestBed } from '@angular/core/testing';

import { ClaimProductsService } from './claim-products.service';

describe('ClaimProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClaimProductsService = TestBed.get(ClaimProductsService);
    expect(service).toBeTruthy();
  });
});
