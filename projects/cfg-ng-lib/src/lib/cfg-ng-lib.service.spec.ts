import { TestBed } from '@angular/core/testing';

import { CfgNgLibService } from './cfg-ng-lib.service';

describe('CfgNgLibService', () => {
  let service: CfgNgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CfgNgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
