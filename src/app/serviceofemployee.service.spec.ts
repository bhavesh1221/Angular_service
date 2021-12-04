import { TestBed } from '@angular/core/testing';

import { ServiceofemployeeService } from './serviceofemployee.service';

describe('ServiceofemployeeService', () => {
  let service: ServiceofemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceofemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
