import { TestBed } from '@angular/core/testing';

import { MyserviseService } from './myservise.service';

describe('MyserviseService', () => {
  let service: MyserviseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserviseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
