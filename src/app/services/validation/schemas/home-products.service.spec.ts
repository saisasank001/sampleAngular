import { TestBed } from '@angular/core/testing';

import { HomeProductsService } from './home-products.service';

describe('HomeProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeProductsService = TestBed.get(HomeProductsService);
    expect(service).toBeTruthy();
  });
});
