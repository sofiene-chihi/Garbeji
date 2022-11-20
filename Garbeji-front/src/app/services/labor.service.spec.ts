import { TestBed } from '@angular/core/testing';

import { LaborService } from './labor.service';

describe('LaborService', () => {
  let service: LaborService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaborService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
