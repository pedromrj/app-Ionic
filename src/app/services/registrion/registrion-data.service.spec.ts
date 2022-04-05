import { TestBed } from '@angular/core/testing';

import { RegistrionDataService } from './registrion-data.service';

describe('RegistrionDataService', () => {
  let service: RegistrionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
