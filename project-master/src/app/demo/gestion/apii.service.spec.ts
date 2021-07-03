import { TestBed } from '@angular/core/testing';

import { ApiiService } from './apii.service';

describe('ApiiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiiService = TestBed.get(ApiiService);
    expect(service).toBeTruthy();
  });
});
