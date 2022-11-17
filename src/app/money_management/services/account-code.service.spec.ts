import { TestBed } from '@angular/core/testing';

import { AccountCodeService } from './account-code.service';

describe('AccountCodeService', () => {
  let service: AccountCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
