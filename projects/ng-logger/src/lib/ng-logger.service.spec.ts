import { TestBed } from '@angular/core/testing';

import { NgLoggerService } from './ng-logger.service';

describe('NgLoggerService', () => {
  let service: NgLoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
