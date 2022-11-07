import { TestBed } from '@angular/core/testing';

import { JmusicNgService } from './jmusic-ng.service';

describe('JmusicNgService', () => {
  let service: JmusicNgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JmusicNgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
