import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mealfullGuard } from './mealfull.guard';

describe('mealfullGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mealfullGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
