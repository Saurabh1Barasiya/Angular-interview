import { TestBed } from '@angular/core/testing';

import { MyServiseService } from './my-servise.service';

describe('MyServiseService', () => {
  let service: MyServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
