import md5 from 'crypto-js/md5';
import { CharacterDataWrapper, CharactersParameters } from '../models/characters.model';
import { ComicsService } from './comics.service';
import { ENV } from '@app/env';
import { errorMsg, responseGetCharacterComics, responseGetError409, responseComicByID } from './responses.mocks';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: ComicsService', () => {
  let comicsServ: ComicsService;
  let navigatorSpy: any;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ComicsService]
    });

    // Inject the http service and test controller for each test
    injector = getTestBed();
    httpMock = TestBed.get(HttpTestingController);
    // Returns a service with the MockBackend so we can test with dummy responses
    comicsServ = injector.get(ComicsService);
  });

  it('#getHeroComics', () => {
    const heroID = 1009149;
    const _url = ENV.url + '/v1/public/characters/' + heroID + '/comics?';

    comicsServ.getHeroComics(heroID).subscribe(res => expect(res.status).toBe('Ok'));

    const req = httpMock.expectOne(req => req.url.includes(_url));
    expect(req.request.method).toBe('GET');
    req.flush(responseGetCharacterComics);
  });

  it('#getComic', () => {
    const comicID = 22300;
    const _url = ENV.url + '/v1/public/comics/' + comicID + '?';

    comicsServ.getComic(comicID).subscribe(res => expect(res.data.results[0].id).toBe(22300));

    const req = httpMock.expectOne(req => req.url.includes(_url));
    expect(req.request.method).toBe('GET');
    req.flush(responseComicByID);
  });

  it('#409', () => {
    const heroID = 1009149;
    const _url = ENV.url + '/v1/public/characters/' + heroID + '/comics?';

    comicsServ
      .getHeroComics(heroID)
      .subscribe(res => fail('should have failed with the 409 error'), error => expect(error).toMatch('409'));

    const req = httpMock.expectOne(req => req.url.includes(_url));
    req.flush(errorMsg, responseGetError409);
  });
});
