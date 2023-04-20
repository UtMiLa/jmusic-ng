/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FileIoService } from './file-io.service';

describe('Service: FileIo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileIoService]
    });
  });

  it('should ...', inject([FileIoService], (service: FileIoService) => {
    expect(service).toBeTruthy();
  }));
});
