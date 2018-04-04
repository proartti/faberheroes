import md5 from 'crypto-js/md5';
import { CharacterDataWrapper, CharactersParameters } from '../models/characters.model';
import { CharactersService } from './characters.service';
import { ENV } from '@app/env';
import { errorMsg, responseGetCharacters, responseGetError409, responseGetHero } from './responses.mocks';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: CharactersService', () => {
  let charactersServ: CharactersService;
  let navigatorSpy: any;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharactersService]
    });

    // Inject the http service and test controller for each test
    injector = getTestBed();
    httpMock = TestBed.get(HttpTestingController);
    // Returns a service with the MockBackend so we can test with dummy responses
    charactersServ = injector.get(CharactersService);
  });

  it('#get', () => {
    const _url = ENV.url + '/v1/public/characters?';

    charactersServ.get().subscribe(res => expect(res.status).toBe('Ok'));

    const req = httpMock.expectOne(req => req.url.includes(_url));
    expect(req.request.method).toBe('GET');
    req.flush(responseGetCharacters);
  });

  it('#getHero', () => {
    const heroID = 1016823;
    const _url = ENV.url + '/v1/public/characters/' + heroID + '?';

    charactersServ.getHero(heroID).subscribe(res => {
      console.log(res);
      expect(res.data.results[0].id).toBe(heroID);
    });

    const req = httpMock.expectOne(req => req.url.includes(_url));
    expect(req.request.method).toBe('GET');
    req.flush(responseGetHero);
  });

  it('#409', () => {
    const _url = ENV.url + '/v1/public/characters?';

    charactersServ
      .get()
      .subscribe(res => fail('should have failed with the 409 error'), error => expect(error).toMatch('409'));

    const req = httpMock.expectOne(req => req.url.includes(_url));
    req.flush(errorMsg, responseGetError409);
  });
});
