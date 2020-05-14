import { TestBed } from '@angular/core/testing';

import { LifeProductsService } from './life-products.service';

describe('LifeProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LifeProductsService = TestBed.get(LifeProductsService);
    expect(service).toBeTruthy();
  });
});
