import { TestBed } from '@angular/core/testing';

import { MealfullService } from './mealfull.service';

describe('MealfullService', () => {
  let service: MealfullService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealfullService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
