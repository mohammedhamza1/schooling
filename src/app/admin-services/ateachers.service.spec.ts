import { TestBed, inject } from '@angular/core/testing';

import { AteachersService } from './ateachers.service';

describe('AteachersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AteachersService]
    });
  });

  it('should be created', inject([AteachersService], (service: AteachersService) => {
    expect(service).toBeTruthy();
  }));
});
