import { TestBed } from '@angular/core/testing';

import { HasProductGuard } from './has-product.guard';

describe('HasProductGuard', () => {
  let guard: HasProductGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasProductGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
