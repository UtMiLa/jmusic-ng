import { TestBed } from '@angular/core/testing';

import { MidiOutService } from './midi-out.service';

describe('MidiOutService', () => {
  let service: MidiOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MidiOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
