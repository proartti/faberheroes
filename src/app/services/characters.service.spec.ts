import md5 from 'crypto-js/md5';
import { CharacterDataWrapper, CharactersParameters } from '../models/characters.model';
import { CharactersService } from './characters.service';
import { ENV } from '@app/env';
import {
  errorMsg,
  responseGetCharacters,
  responseGetError409,
  responseGetHero,
  imageDataBlue
} from './responses.mocks';
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
      expect(res.data.results[0].id).toBe(heroID);
    });

    const req = httpMock.expectOne(req => req.url.includes(_url));
    expect(req.request.method).toBe('GET');
    req.flush(responseGetHero);
  });

  it('#getImageData', () => {
    const _url = 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_fantastic.jpg';

    charactersServ.getImageData(_url).subscribe(res => expect(res.size).toBe(10099));

    const req = httpMock.expectOne(req => req.url.includes(_url));
    expect(req.request.method).toBe('GET');
  });

  it('#getAverageRGB', () => {
    // Conver the image base64 string to BLOB
    // https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript?answertab=votes#tab-top
    let byteCharacters = atob(imageDataBlue);
    let byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    let byteArray = new Uint8Array(byteNumbers);
    const imageBlob = new Blob([byteArray]);

    // Convert the blob to bitmatImage and then run the test
    createImageBitmap(imageBlob, 0, 0, 4, 4).then((i: ImageBitmap) => {
      // Use the ImageBitmat to analyse the image's colors and retur the avarage RGB value as a string
      expect(charactersServ.getAverageRGB(i)).toBe('rgb(1,24,200)');
    });
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
