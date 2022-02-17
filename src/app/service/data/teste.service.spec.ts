import { TestBed } from '@angular/core/testing';
import { TesteService } from './teste.service';

describe('TesteService', () => {
  let service: TesteService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [TesteService] });
    service = TestBed.inject(TesteService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
