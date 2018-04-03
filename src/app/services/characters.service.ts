import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ENV } from '@app/env';
import { CharacterDataWrapper, CharactersParameters } from '../models/characters.model';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import * as md5 from 'crypto-js/md5';

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
