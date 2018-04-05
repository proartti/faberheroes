import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ENV } from '@app/env';
import { CharacterDataWrapper, CharactersParameters } from '../models/characters.model';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import * as md5 from 'crypto-js/md5';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CharactersService {
  _url = ENV.url;
  publicKey = ENV.public_key;
  privateKey = ENV.private_key;

  constructor(private http: HttpClient) {}

  // Get Heros
  // initialize the search
  get(params: CharactersParameters = {}) {
    return this.http
      .get<CharacterDataWrapper[]>(this._url + '/v1/public/characters?' + this.setParams(params) + this.authString())
      .pipe(catchError(this.handleError));
  }

  // Get a specific Hero by its ID
  getHero(heroID: number) {
    return this.http
      .get<CharacterDataWrapper>(this._url + '/v1/public/characters/' + heroID + '?' + this.authString())
      .pipe(catchError(this.handleError));
  }

  // convert the search params to string
  private setParams(params: CharactersParameters): string {
    let paramString = '';

    // Check the params and adds it to paramString
    for (const param in params) {
      if (params[param]) {
        paramString += '&' + param + '=' + params[param];
      }
    }
    return paramString;
  }

  // load the image and return its blob
  // Takes the full image path as argument
  // ex: imagePath: string = 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_fantastic.jpg'
  getImageData(imagePath: string): Observable<Blob> {
    return this.http.get(imagePath, {
      responseType: 'blob'
    });
  }

  // takes the ImageBitmap and return the avarage RGB value
  getAverageRGB(imgEl: ImageBitmap): string {
    let blockSize = 5; // only visit every 5 pixels
    let defaultBG = 'rgb(223, 229, 231)'; // for non-supporting envs
    let canvas = document.createElement('canvas');
    let context = canvas.getContext && canvas.getContext('2d');
    let data;
    let width;
    let height;
    let i = -4;
    let length;
    let rgb = { r: 0, g: 0, b: 0 };
    let count = 0;

    if (!context) {
      return defaultBG;
    }

    height = canvas.height = imgEl.height;
    width = canvas.width = imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      return defaultBG;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return 'rgb(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ')';
  }

  // Set the Authentication string
  // Make uses of ENV variables public_key and private_key
  private authString(): string {
    const puk = this.publicKey;
    const prk = this.privateKey;
    const ts = new Date().getTime();
    const hash = md5(ts + prk + puk);

    return '&ts=' + ts + '&apikey=' + puk + '&hash=' + hash;
  }

  // Error handler function
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable('Something bad happened; please try again later. Error: ' + error.status);
  }
}
