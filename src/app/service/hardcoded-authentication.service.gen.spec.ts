import { TestBed } from '@angular/core/testing';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

describe('HardcodedAuthenticationService', () => {
  let service: HardcodedAuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HardcodedAuthenticationService]
    });
    service = TestBed.inject(HardcodedAuthenticationService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
