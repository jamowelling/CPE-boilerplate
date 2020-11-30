import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GlobalConfigService } from './global-config.service';

describe('GlobalConfigService', () => {
  let service: GlobalConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(GlobalConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
