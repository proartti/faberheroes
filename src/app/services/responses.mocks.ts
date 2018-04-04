// Generic error massage
export const errorMsg = 'Something bad happened; please try again later.';

// mock header response error 409
export const responseGetError409 = {
  status: 409,
  statusText: 'Invalid or unrecognized parameter.'
};

// mock response data /v1/public/characters
export const responseGetCharacters = {
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

// mock response /v1/public/characters/{hero ID}
export const responseGetHero = {
  code: 200,
  status: 'Ok',
  copyright: '© 2018 MARVEL',
  attributionText: 'Data provided by Marvel. © 2018 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>',
  etag: '9eea0c49dda19a432a5eb2ec3aaae53c3b97f937',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 1016823,
        name: 'Abomination (Ultimate)',
        description: '',
        modified: '2012-07-10T19:11:52-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg'
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1016823',
        comics: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016823/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/15717',
              name: 'Ultimate X-Men (2000) #26'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1151',
              name: 'Ultimate X-Men Vol. 6: Return of the King (Trade Paperback)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/1186',
              name: 'Ultimate X-Men Vol. VI: Return of the King (Trade Paperback)'
            }
          ],
          returned: 3
        },
        series: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016823/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/474',
              name: 'Ultimate X-Men (2000 - 2009)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/210',
              name: 'Ultimate X-Men Vol. 6: Return of the King (2003)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/243',
              name: 'Ultimate X-Men Vol. VI: Return of the King (2003)'
            }
          ],
          returned: 3
        },
        stories: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016823/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/31883',
              name: 'Free Preview of THE INCREDIBLE HULK #50',
              type: 'interiorStory'
            }
          ],
          returned: 1
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1016823/events',
          items: [],
          returned: 0
        },
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/characters/81/abomination?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'comiclink',
            url:
              'http://marvel.com/comics/characters/1016823/abomination_ultimate?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ]
      }
    ]
  }
};

// mock response /v1/public/characters/{hero ID}/comic
export const responseGetCharacterComics = {
  code: 200,
  status: 'Ok',
  copyright: '© 2018 MARVEL',
  attributionText: 'Data provided by Marvel. © 2018 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>',
  etag: 'db156250b1da7d9efcb3f6f69de58d5a1efd4a31',
  data: {
    offset: 0,
    limit: 20,
    total: 8,
    count: 8,
    results: [
      {
        id: 2539,
        digitalId: 0,
        title: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)',
        issueNumber: 0,
        variantDescription: '',
        description:
          "See your favorite mutants through a dark glass as the epic that literally rebuilt the X-Men in eight miniseries and more continues! Apocalypse has conquered half of humankind and is ready to destroy them all! Magneto and his Amazing X-Men fight to protect humans and mutants alike, only to learn from Bishop (now on his THIRD reality and counting) that his world might need to be unmade! Plus: excerpts from Apocalypse's own files on the alternate-universe X-Men, and their friends and foes...but which is which? Featuring Blink and Sabretooth of the Exiles! Collects X-MEN: ALPHA, AGE OF APOCALYPSE: THE CHOSEN, GENERATION NEXT #1, ASTONISHING X-MEN VOL. 1 #1, X-CALIBRE #1, GAMBIT AND THE X-TERNALS #1-2, WEAPON X VOL. 1 #1-2, AMAZING X-MEN #1-2, FACTOR X #1-2 and X-MAN #1\r<br>376 PGS./T+ SUGGESTED FOR TEENS AND UP ...$29.99\r<br>",
        modified: '2017-07-10T17:28:37-0400',
        isbn: '0-7851-1874-8',
        upc: '5960611874-00111',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Trade Paperback',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              "See your favorite mutants through a dark glass as the epic that literally rebuilt the X-Men in eight miniseries and more continues! Apocalypse has conquered half of humankind and is ready to destroy them all! Magneto and his Amazing X-Men fight to protect humans and mutants alike, only to learn from Bishop (now on his THIRD reality and counting) that his world might need to be unmade! Plus: excerpts from Apocalypse's own files on the alternate-universe X-Men, and their friends and foes...but which is which? Featuring Blink and Sabretooth of the Exiles! Collects X-MEN: ALPHA, AGE OF APOCALYPSE: THE CHOSEN, GENERATION NEXT #1, ASTONISHING X-MEN VOL. 1 #1, X-CALIBRE #1, GAMBIT AND THE X-TERNALS #1-2, WEAPON X VOL. 1 #1-2, AMAZING X-MEN #1-2, FACTOR X #1-2 and X-MAN #1\r<br>376 PGS./T+ SUGGESTED FOR TEENS AND UP ...$29.99\r<br>"
          }
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/2539',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/collection/2539/x-men_the_complete_age_of_apocalypse_epic_book_2_trade_paperback?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1583',
          name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)'
        },
        variants: [],
        collections: [],
        collectedIssues: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20045',
            name: 'Factor X (1995) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
            name: 'Age of Apocalypse: The Chosen (1995) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/18100',
            name: 'Weapon X (1995) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16078',
            name: 'Gambit and the X-Ternals (1995) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17732',
            name: 'Amazing X-Men (1995) #2'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/18099',
            name: 'Weapon X (1995) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20038',
            name: 'Generation Next (1995) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/17731',
            name: 'Amazing X-Men (1995) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/18253',
            name: 'X-Calibre (1995) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/20044',
            name: 'Factor X (1995) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/16077',
            name: 'Gambit and the X-Ternals (1995) #1'
          },
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/12386',
            name: 'X-Men: Alpha (1995) #1'
          }
        ],
        dates: [
          {
            type: 'onsaleDate',
            date: '2005-10-05T00:00:00-0400'
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500'
          }
        ],
        prices: [
          {
            type: 'printPrice',
            price: 9.99
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc61dec7755f',
          extension: 'jpg'
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc61dec7755f',
            extension: 'jpg'
          }
        ],
        creators: {
          available: 53,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2539/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/807',
              name: 'Comicraft',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/3626',
              name: 'Pat Brosseau',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
              name: 'Chris Eliopoulos',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5991',
              name: 'Toinay',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1836',
              name: 'Terry Austin',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/71',
              name: 'Mark Buckingham',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/972',
              name: 'Kevin Conrad',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/232',
              name: 'Chris Bachalo',
              role: 'penciler'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1192',
              name: 'Ian Churchill',
              role: 'penciler'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/354',
              name: 'Tony Daniel',
              role: 'penciler'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1909',
              name: 'Steve Buccellato',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2974',
              name: 'Digital Chameleon',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4101',
              name: 'Electric Crayon',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/3572',
              name: 'Kelly Corvese',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9565',
              name: 'Tom Defalco',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2099',
              name: 'Suzanne Gaffney',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2520',
              name: 'Jaye Gardner',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/356',
              name: 'Roger Cruz',
              role: 'penciller'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/374',
              name: 'Steve Epting',
              role: 'penciller'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/676',
              name: 'Warren Ellis',
              role: 'writer'
            }
          ],
          returned: 20
        },
        characters: {
          available: 39,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2539/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
              name: 'Abyss'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010903',
              name: 'Abyss (Age of Apocalypse)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009156',
              name: 'Apocalypse'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009159',
              name: 'Archangel'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009163',
              name: 'Aurora'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
              name: 'Beast'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009182',
              name: 'Bishop'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009197',
              name: 'Blink'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009199',
              name: 'Blob'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009223',
              name: 'Captain Britain'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
              name: 'Colossus'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
              name: 'Cyclops'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009310',
              name: 'Emma Frost'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009313',
              name: 'Gambit'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009337',
              name: 'Havok'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009349',
              name: 'Holocaust (Age of Apocalypse)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009362',
              name: 'Iceman'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009327',
              name: 'Jean Grey'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009416',
              name: 'Magma (Amara Aquilla)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009417',
              name: 'Magneto'
            }
          ],
          returned: 20
        },
        stories: {
          available: 45,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2539/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/26281',
              name: 'A Beginning',
              type: 'interiorStory'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/32819',
              name: 'Some of Us Looking to the Stars',
              type: 'interiorStory'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/32820',
              name: 'X-Facts: The Dream is Over',
              type: 'text article'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/32822',
              name: 'Where No External Has Gone Before',
              type: 'interiorStory'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/32823',
              name: 'X-Facts: Reality Checked',
              type: 'text article'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37493',
              name: '[opening]',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37494',
              name: 'Magneto and Rogue',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37495',
              name: 'X-Man',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37496',
              name: 'Cyclops',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37497',
              name: 'Havok',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37498',
              name: 'Mr. Sinister',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37499',
              name: 'Storm',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37500',
              name: 'Quicksilver',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37501',
              name: 'Northstar and Aurora',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37502',
              name: 'Beast',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37503',
              name: 'The Four Horsemen',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37504',
              name: 'X-Calibre',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37505',
              name: 'The Human High Council',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37506',
              name: 'Weapon X and Jean Grey',
              type: ''
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/37507',
              name: 'Gambit and the Externals',
              type: ''
            }
          ],
          returned: 20
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/2539/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
              name: 'Age of Apocalypse'
            }
          ],
          returned: 1
        }
      },
      {
        id: 13972,
        digitalId: 7425,
        title: 'Uncanny X-Men (1963) #431',
        issueNumber: 431,
        variantDescription: '',
        description: null,
        modified: '2016-10-14T11:37:33-0400',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/13972',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/13972/uncanny_x-men_1963_431?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Uncanny-X-Men-431/digital-comic/7425?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'reader',
            url:
              'http://marvel.com/digitalcomics/view.htm?iid=7425&utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/7425?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
          name: 'Uncanny X-Men (1963 - 2011)'
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2003-10-17T00:00:00-0400'
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500'
          },
          {
            type: 'unlimitedDate',
            date: '2008-09-17T00:00:00-0400'
          },
          {
            type: 'digitalPurchaseDate',
            date: '2013-04-23T00:00:00-0400'
          }
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/591c5a8736ac2',
          extension: 'jpg'
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/591c5a8736ac2',
            extension: 'jpg'
          }
        ],
        creators: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13972/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11',
              name: 'Chuck Austen',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/30',
              name: 'Stan Lee',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4174',
              name: 'Mike Marts',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4207',
              name: 'Avalon Studio',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/6146',
              name: 'Avalon Studios',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/489',
              name: 'Philip Tan',
              role: 'penciller (cover)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/410',
              name: 'Rus Wooton',
              role: 'letterer'
            }
          ],
          returned: 7
        },
        characters: {
          available: 13,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13972/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
              name: 'Abyss'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009159',
              name: 'Archangel'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009337',
              name: 'Havok'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009357',
              name: 'Husk'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009362',
              name: 'Iceman'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009381',
              name: 'Jubilee'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009382',
              name: 'Juggernaut'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009465',
              name: 'Mystique'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
              name: 'Nightcrawler'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009476',
              name: 'Northstar'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009499',
              name: 'Polaris'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men'
            }
          ],
          returned: 13
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13972/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28410',
              name: 'UNCANNY X-MEN (1963) #431',
              type: 'cover'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28411',
              name: 'The Draco Part Three',
              type: 'interiorStory'
            }
          ],
          returned: 2
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13972/events',
          items: [],
          returned: 0
        }
      },
      {
        id: 13970,
        digitalId: 7423,
        title: 'Uncanny X-Men (1963) #429',
        issueNumber: 429,
        variantDescription: '',
        description: null,
        modified: '2016-10-14T11:36:22-0400',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/13970',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/13970/uncanny_x-men_1963_429?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Uncanny-X-Men-429/digital-comic/7423?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'reader',
            url:
              'http://marvel.com/digitalcomics/view.htm?iid=7423&utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/7423?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
          name: 'Uncanny X-Men (1963 - 2011)'
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2003-09-30T00:00:00-0400'
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500'
          },
          {
            type: 'unlimitedDate',
            date: '2008-09-17T00:00:00-0400'
          },
          {
            type: 'digitalPurchaseDate',
            date: '2013-04-23T00:00:00-0400'
          }
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/591b6a3ce65a4',
          extension: 'jpg'
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/591b6a3ce65a4',
            extension: 'jpg'
          }
        ],
        creators: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13970/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11',
              name: 'Chuck Austen',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/30',
              name: 'Stan Lee',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4174',
              name: 'Mike Marts',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4207',
              name: 'Avalon Studio',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/6146',
              name: 'Avalon Studios',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/489',
              name: 'Philip Tan',
              role: 'penciller (cover)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/410',
              name: 'Rus Wooton',
              role: 'letterer'
            }
          ],
          returned: 7
        },
        characters: {
          available: 12,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13970/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
              name: 'Abyss'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009159',
              name: 'Archangel'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009337',
              name: 'Havok'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009357',
              name: 'Husk'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009362',
              name: 'Iceman'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009381',
              name: 'Jubilee'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009382',
              name: 'Juggernaut'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
              name: 'Nightcrawler'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009499',
              name: 'Polaris'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009504',
              name: 'Professor X'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009718',
              name: 'Wolverine'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men'
            }
          ],
          returned: 12
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13970/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28406',
              name: 'UNCANNY X-MEN (1963) #429',
              type: 'cover'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28407',
              name: 'The Draco Part One: Sins of the Father',
              type: 'interiorStory'
            }
          ],
          returned: 2
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13970/events',
          items: [],
          returned: 0
        }
      },
      {
        id: 13947,
        digitalId: 31308,
        title: 'Uncanny X-Men (1963) #406',
        issueNumber: 406,
        variantDescription: '',
        description: null,
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/13947',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/13947/uncanny_x-men_1963_406?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Uncanny-X-Men-406/digital-comic/31308?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'reader',
            url:
              'http://marvel.com/digitalcomics/view.htm?iid=31308&utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'inAppLink',
            url:
              'https://applink.marvel.com/issue/31308?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
          name: 'Uncanny X-Men (1963 - 2011)'
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2002-07-01T00:00:00-0400'
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500'
          },
          {
            type: 'unlimitedDate',
            date: '2013-09-09T00:00:00-0400'
          },
          {
            type: 'digitalPurchaseDate',
            date: '2013-12-10T00:00:00-0500'
          }
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/591deb9a803d2',
          extension: 'jpg'
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/60/591deb9a803d2',
            extension: 'jpg'
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/20/511529430a882',
            extension: 'jpg'
          }
        ],
        creators: {
          available: 16,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13947/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11',
              name: 'Chuck Austen',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/159',
              name: 'Joe Casey',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/30',
              name: 'Stan Lee',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4496',
              name: 'Hi Fi Design',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1405',
              name: 'Matt Milla',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
              name: 'Chris Eliopoulos',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/350',
              name: 'Richard Starkings',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2533',
              name: 'Saida Temofonte',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/248',
              name: 'David Finch',
              role: 'penciller'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/540',
              name: 'Aaron Lopresti',
              role: 'penciller'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1282',
              name: 'Ralph Macchio',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/3710',
              name: 'Mark Powers',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11553',
              name: 'Danny K. Miki',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/454',
              name: 'Mark Morales',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/568',
              name: 'Art Thibert',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1082',
              name: 'Ariel Olivetti',
              role: 'penciller (cover)'
            }
          ],
          returned: 16
        },
        characters: {
          available: 13,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13947/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
              name: 'Abyss'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009164',
              name: 'Avalanche'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009168',
              name: 'Banshee'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009199',
              name: 'Blob'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009233',
              name: 'Chamber'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009357',
              name: 'Husk'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009362',
              name: 'Iceman'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009381',
              name: 'Jubilee'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009434',
              name: 'Mastermind'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009465',
              name: 'Mystique'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
              name: 'Nightcrawler'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009618',
              name: 'Stacy X'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men'
            }
          ],
          returned: 13
        },
        stories: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13947/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28359',
              name: 'Cover #28359',
              type: 'cover'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28360',
              name: 'Staring Contests are for Suckers',
              type: 'interiorStory'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28361',
              name: 'The Call of Duty Promo',
              type: 'promo'
            }
          ],
          returned: 3
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13947/events',
          items: [],
          returned: 0
        }
      },
      {
        id: 13946,
        digitalId: 31307,
        title: 'Uncanny X-Men (1963) #405',
        issueNumber: 405,
        variantDescription: '',
        description: null,
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/13946',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/13946/uncanny_x-men_1963_405?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Uncanny-X-Men-405/digital-comic/31307?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'reader',
            url:
              'http://marvel.com/digitalcomics/view.htm?iid=31307&utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'inAppLink',
            url:
              'https://applink.marvel.com/issue/31307?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
          name: 'Uncanny X-Men (1963 - 2011)'
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2002-06-01T00:00:00-0400'
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500'
          },
          {
            type: 'unlimitedDate',
            date: '2013-09-09T00:00:00-0400'
          },
          {
            type: 'digitalPurchaseDate',
            date: '2013-12-10T00:00:00-0500'
          }
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/10/591deb1bd1554',
          extension: 'jpg'
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/10/591deb1bd1554',
            extension: 'jpg'
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/00/509d60e585fdf',
            extension: 'jpg'
          }
        ],
        creators: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13946/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/159',
              name: 'Joe Casey',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4496',
              name: 'Hi Fi Design',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/540',
              name: 'Aaron Lopresti',
              role: 'penciller (cover)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/569',
              name: 'Sean Phillips',
              role: 'penciller (cover)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/3710',
              name: 'Mark Powers',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/350',
              name: 'Richard Starkings',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2533',
              name: 'Saida Temofonte',
              role: 'letterer'
            }
          ],
          returned: 7
        },
        characters: {
          available: 13,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13946/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
              name: 'Abyss'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009164',
              name: 'Avalanche'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009168',
              name: 'Banshee'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009199',
              name: 'Blob'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009233',
              name: 'Chamber'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009357',
              name: 'Husk'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009362',
              name: 'Iceman'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009381',
              name: 'Jubilee'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009434',
              name: 'Mastermind'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009465',
              name: 'Mystique'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
              name: 'Nightcrawler'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009618',
              name: 'Stacy X'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men'
            }
          ],
          returned: 13
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13946/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28357',
              name: 'Cover #28357',
              type: 'cover'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28358',
              name: 'Ballroom Blitzkrieg',
              type: 'interiorStory'
            }
          ],
          returned: 2
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13946/events',
          items: [],
          returned: 0
        }
      },
      {
        id: 13945,
        digitalId: 31306,
        title: 'Uncanny X-Men (1963) #404',
        issueNumber: 404,
        variantDescription: '',
        description: null,
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/13945',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/13945/uncanny_x-men_1963_404?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Uncanny-X-Men-404/digital-comic/31306?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'reader',
            url:
              'http://marvel.com/digitalcomics/view.htm?iid=31306&utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'inAppLink',
            url:
              'https://applink.marvel.com/issue/31306?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
          name: 'Uncanny X-Men (1963 - 2011)'
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2002-04-01T00:00:00-0500'
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500'
          },
          {
            type: 'unlimitedDate',
            date: '2013-09-09T00:00:00-0400'
          },
          {
            type: 'digitalPurchaseDate',
            date: '2013-12-10T00:00:00-0500'
          }
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/70/591deab576a53',
          extension: 'jpg'
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/70/591deab576a53',
            extension: 'jpg'
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/d0/509d622b0ea35',
            extension: 'jpg'
          }
        ],
        creators: {
          available: 6,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13945/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/159',
              name: 'Joe Casey',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4496',
              name: 'Hi Fi Design',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/569',
              name: 'Sean Phillips',
              role: 'penciller (cover)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/3710',
              name: 'Mark Powers',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/350',
              name: 'Richard Starkings',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2533',
              name: 'Saida Temofonte',
              role: 'letterer'
            }
          ],
          returned: 6
        },
        characters: {
          available: 10,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13945/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
              name: 'Abyss'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009164',
              name: 'Avalanche'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009199',
              name: 'Blob'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009233',
              name: 'Chamber'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009362',
              name: 'Iceman'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009434',
              name: 'Mastermind'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009465',
              name: 'Mystique'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
              name: 'Nightcrawler'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009618',
              name: 'Stacy X'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men'
            }
          ],
          returned: 10
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13945/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28355',
              name: 'Cover #28355',
              type: 'cover'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28356',
              name: 'Army Ants',
              type: 'interiorStory'
            }
          ],
          returned: 2
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13945/events',
          items: [],
          returned: 0
        }
      },
      {
        id: 13943,
        digitalId: 31304,
        title: 'Uncanny X-Men (1963) #402',
        issueNumber: 402,
        variantDescription: '',
        description: null,
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/13943',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/13943/uncanny_x-men_1963_402?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/Uncanny-X-Men-402/digital-comic/31304?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'reader',
            url:
              'http://marvel.com/digitalcomics/view.htm?iid=31304&utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'inAppLink',
            url:
              'https://applink.marvel.com/issue/31304?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2258',
          name: 'Uncanny X-Men (1963 - 2011)'
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2002-02-01T00:00:00-0500'
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500'
          },
          {
            type: 'unlimitedDate',
            date: '2013-09-09T00:00:00-0400'
          },
          {
            type: 'digitalPurchaseDate',
            date: '2013-12-10T00:00:00-0500'
          }
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/40/591de95a5e5e8',
          extension: 'jpg'
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/40/591de95a5e5e8',
            extension: 'jpg'
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/40/4f6736b489dc5',
            extension: 'jpg'
          }
        ],
        creators: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13943/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/159',
              name: 'Joe Casey',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4496',
              name: 'Hi Fi Design',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/120',
              name: 'Ron Garney',
              role: 'penciller (cover)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/454',
              name: 'Mark Morales',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/3710',
              name: 'Mark Powers',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/350',
              name: 'Richard Starkings',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2533',
              name: 'Saida Temofonte',
              role: 'letterer'
            }
          ],
          returned: 7
        },
        characters: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13943/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
              name: 'Abyss'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009164',
              name: 'Avalanche'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009199',
              name: 'Blob'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009233',
              name: 'Chamber'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009362',
              name: 'Iceman'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009472',
              name: 'Nightcrawler'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009618',
              name: 'Stacy X'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009726',
              name: 'X-Men'
            }
          ],
          returned: 8
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13943/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28351',
              name: 'Cover #28351',
              type: 'cover'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/28352',
              name: 'Utility of Myth',
              type: 'interiorStory'
            }
          ],
          returned: 2
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/13943/events',
          items: [],
          returned: 0
        }
      },
      {
        id: 12386,
        digitalId: 3112,
        title: 'X-Men: Alpha (1995) #1',
        issueNumber: 1,
        variantDescription: '',
        description:
          'The Age of Apocalypse starts here!  Witness the birth of a whole new era for the X-Men. ALPHA kicks off Astonishing and Amazing X-Men and sets the stage for everything that is to come!',
        modified: '2017-08-21T13:47:16-0400',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_preview_text',
            language: 'en-us',
            text:
              'The Age of Apocalypse starts here!  Witness the birth of a whole new era for the X-Men. ALPHA kicks off Astonishing and Amazing X-Men and sets the stage for everything that is to come!'
          },
          {
            type: '70th_winner_desc',
            language: 'en-us',
            text:
              'This chromium wrap-around cover set the stage for the Age of Apocalypse in the Marvel U.  Only Joe Madureira and Tim Townsend could make a depressingly dystopian future look this good!'
          }
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/12386',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/12386/x-men_alpha_1995_1?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'purchase',
            url:
              'http://comicstore.marvel.com/X-Men-Alpha-1/digital-comic/3112?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'reader',
            url:
              'http://marvel.com/digitalcomics/view.htm?iid=3112&utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/3112?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/2104',
          name: 'X-Men: Alpha (1995)'
        },
        variants: [],
        collections: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/2539',
            name: 'X-Men: The Complete Age of Apocalypse Epic Book 2 (Trade Paperback)'
          }
        ],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '1995-02-01T00:00:00-0500'
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500'
          },
          {
            type: 'unlimitedDate',
            date: '2007-11-13T00:00:00-0500'
          },
          {
            type: 'digitalPurchaseDate',
            date: '2011-01-26T00:00:00-0500'
          }
        ],
        prices: [
          {
            type: 'printPrice',
            price: 3.95
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/00/599b1cf83439a',
          extension: 'jpg'
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/00/599b1cf83439a',
            extension: 'jpg'
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/59639a091bfe1',
            extension: 'jpg'
          }
        ],
        creators: {
          available: 13,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/12386/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/807',
              name: 'Comicraft',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/350',
              name: 'Richard Starkings',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1909',
              name: 'Steve Buccellato',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4101',
              name: 'Electric Crayon',
              role: 'colorist'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/356',
              name: 'Roger Cruz',
              role: 'penciller'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/374',
              name: 'Steve Epting',
              role: 'penciller'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/9565',
              name: 'Tom Defalco',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/375',
              name: 'Bob Harras',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/3637',
              name: 'Scott Lobdell',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/119',
              name: 'Mark Waid',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1222',
              name: 'Joe Madureira',
              role: 'penciller (cover)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1914',
              name: 'Dan Panosian',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/427',
              name: 'Tim Townsend',
              role: 'inker'
            }
          ],
          returned: 13
        },
        characters: {
          available: 35,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/12386/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009149',
              name: 'Abyss'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010903',
              name: 'Abyss (Age of Apocalypse)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009153',
              name: 'Angel (Warren Worthington III)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009156',
              name: 'Apocalypse'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009159',
              name: 'Archangel'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009175',
              name: 'Beast'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009182',
              name: 'Bishop'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009197',
              name: 'Blink'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009199',
              name: 'Blob'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009243',
              name: 'Colossus'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009257',
              name: 'Cyclops'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009313',
              name: 'Gambit'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009337',
              name: 'Havok'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009349',
              name: 'Holocaust (Age of Apocalypse)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009362',
              name: 'Iceman'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009327',
              name: 'Jean Grey'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009381',
              name: 'Jubilee'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011386',
              name: 'Karma'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009417',
              name: 'Magneto'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009530',
              name: 'Mikhail Rasputin'
            }
          ],
          returned: 20
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/12386/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/26280',
              name: 'X-Men: Alpha (1994) #1',
              type: 'cover'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/26281',
              name: 'A Beginning',
              type: 'interiorStory'
            }
          ],
          returned: 2
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/12386/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
              name: 'Age of Apocalypse'
            }
          ],
          returned: 1
        }
      }
    ]
  }
};

// mock response /v1/public/comics/{comic ID}
export const responseComicByID = {
  code: 200,
  status: 'Ok',
  copyright: '© 2018 MARVEL',
  attributionText: 'Data provided by Marvel. © 2018 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2018 MARVEL</a>',
  etag: 'ab60bb3dedd945459dc90f3e6209dd48798fd97a',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 22300,
        digitalId: 0,
        title: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
        issueNumber: 18,
        variantDescription: 'ZOMBIE VARIANT',
        description:
          "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99\r<br>",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960606084-01821',
        diamondCode: 'AUG082378',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text:
              "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99\r<br>"
          }
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
        urls: [
          {
            type: 'detail',
            url:
              'http://marvel.com/comics/issue/22300/avengers_the_initiative_2007_18_zombie_variant/zombie_variant?utm_campaign=apiRef&utm_source=27c526379659c749ac160edc8cf7ef63'
          }
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
          name: 'Avengers: The Initiative (2007 - 2010)'
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
            name: 'Avengers: The Initiative (2007) #18'
          }
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2008-10-29T00:00:00-0400'
          },
          {
            type: 'focDate',
            date: '2008-10-09T00:00:00-0400'
          }
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99
          }
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/10/4e94a23255996',
          extension: 'jpg'
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/10/4e94a23255996',
            extension: 'jpg'
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/20/4bb63aa561aa0',
            extension: 'jpg'
          }
        ],
        creators: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22300/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Joe Caramagna',
              role: 'letterer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1054',
              name: 'Juan Doe',
              role: 'penciller (cover)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11765',
              name: 'Christos Gage',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/626',
              name: 'Dan Slott',
              role: 'writer'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/548',
              name: 'Andrew Hennessy',
              role: 'inker'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4981',
              name: 'Steve Kurth',
              role: 'penciller'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1405',
              name: 'Matt Milla',
              role: 'colorist'
            }
          ],
          returned: 8
        },
        characters: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22300/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010802',
              name: "Ant-Man (Eric O'Grady)"
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010823',
              name: 'Cloud 9'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009284',
              name: 'Dum Dum Dugan'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010702',
              name: 'Gravity'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011490',
              name: 'Hank Pym'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010818',
              name: 'Komodo (Melati Kusuma)'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009599',
              name: 'Skrulls'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011057',
              name: 'Slapstick'
            }
          ],
          returned: 9
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22300/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49105',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant',
              type: 'cover'
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
              type: 'interiorStory'
            }
          ],
          returned: 2
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22300/events',
          items: [],
          returned: 0
        }
      }
    ]
  }
};
