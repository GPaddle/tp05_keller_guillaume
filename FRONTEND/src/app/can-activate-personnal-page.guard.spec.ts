import { TestBed } from '@angular/core/testing';

import { CanActivatePersonnalPageGuard } from './can-activate-personnal-page.guard';

describe('CanActivatePersonnalPageGuard', () => {
  let guard: CanActivatePersonnalPageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanActivatePersonnalPageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
