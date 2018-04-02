import { TestBed, getTestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CharactersService } from './characters.service';
import { ENV } from '@app/env';
import { CharacterDataWrapper, CharactersParameters } from '../models/characters.model';
import md5 from 'crypto-js/md5';

describe('Service: TreeService', () => {
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
    req.flush(responseGetCharactes);
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

// mock response data
const responseGetCharactes = {
  code: 200,
  status: 'Ok',
  copyright: '© 2018 MARVEL',
  attributionText: 'Data provided by Marvel. © 2018 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>',
  etag: 'd1b4f49d43eab178bef86221cfcdc2ee17d37517',
  data: {
    offset: 0,
    limit: 2,
    total: 1491,
    count: 2,
    results: [
      {
        id: 1011334,
        name: '3-D Man',
        description: '',
        modified: '2014-04-29T14:18:17-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
          extension: 'jpg'
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
        comics: {
          available: 12,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
              name: 'Avengers: The Initiative (2007) #14'
            }
          ],
          returned: 1
        },
        series: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
              name: 'Avengers: The Initiative (2007 - 2010)'
            }
          ],
          returned: 1
        },
        stories: {
          available: 21,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
              name: 'Cover #19947',
              type: 'cover'
            }
          ],
          returned: 1
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1011334/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion'
            }
          ],
          returned: 1
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/characters/74/3-d_man?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ]
      },
      {
        id: 1017100,
        name: 'A-Bomb (HAS)',
        description:
          "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
        modified: '2013-09-18T15:54:04-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
          extension: 'jpg'
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1017100',
        comics: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/comics',
          items: [],
          returned: 0
        },
        series: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/series',
          items: [],
          returned: 0
        },
        stories: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/105929',
              name: 'cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1',
              type: 'cover'
            }
          ],
          returned: 1
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1017100/events',
          items: [],
          returned: 0
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/characters/76/a-bomb?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1017100/a-bomb_has?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ]
      }
    ]
  }
};

// Generic error massage
let errorMsg = 'Something bad happened; please try again later.';

// mock header response error 409
const responseGetError409 = {
  status: 409,
  statusText: 'Invalid or unrecognized parameter.'
};
