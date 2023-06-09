import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DcdApiService } from './dcd-api.service';

describe('DcdApiService', () => {
  let service: DcdApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(DcdApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
