import { TestBed } from '@angular/core/testing';

import { FakeEmailsService } from './fake-emails.service';

describe('FakeEmailsService', () => {
  let service: FakeEmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeEmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
