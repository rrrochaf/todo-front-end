import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { WelcomeDataService } from './welcome-data.service';

describe('WelcomeDataService', () => {
  let service: WelcomeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WelcomeDataService]
    });
    service = TestBed.inject(WelcomeDataService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('executeHelloWorldBeanService', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.executeHelloWorldBeanService().subscribe(res => {
        expect(res)
      });
      const req = httpTestingController.expectOne(
        'http://localhost:8080/hello-world-bean'
      );
      expect(req.request.method).toEqual('GET');
      req
      httpTestingController.verify();
    });
  });
});
