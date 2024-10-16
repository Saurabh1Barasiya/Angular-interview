import { TestBed } from '@angular/core/testing';

import { MysevisesService } from './mysevises.service';

describe('MysevisesService', () => {
  let service: MysevisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysevisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
