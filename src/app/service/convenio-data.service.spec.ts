import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ConvenioDataService } from './convenio-data.service';

describe('ConvenioDataService', () => {
  let service: ConvenioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConvenioDataService]
    });
    service = TestBed.inject(ConvenioDataService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('retrieveAllConvenios', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.retrieveAllConvenios().subscribe(res => {
        expect(res)
      });
      const req = httpTestingController.expectOne('HTTP_ROUTE_GOES_HERE');
      expect(req.request.method).toEqual('GET');
      req
      httpTestingController.verify();
    });
  });
});
