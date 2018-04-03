import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CharactersService } from '../../app/services/characters.service';
import { PaginationParams } from '../../app/models/characters.model';
import {
  CharacterDataWrapper,
  Character,
  CharactersParameters,
  PaginationParams
} from '../../app/models/characters.model';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  heros: Character[] = [];
  paginationParams: PaginationParams;
  paginationText: string;
  searhInput: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public characterServ: CharactersService) {
    // Set the heros initial data
    this.getHeros();

    // Reset Pagination and define default limit
    this.paginationParams = {
      limit: 20,
      currentPage: 1
    };
  }

  // Set the Heros Data
  getHeros(params: CharactersParameters = {}) {
    // if there is value in the searchbar add to the search params
    if (this.searhInput !== '') {
      params.nameStartsWith = this.searhInput;
    }
    // Call the Character Service with custon params
    this.characterServ.get(params).subscribe(
      (res: CharacterDataWrapper) => {
        // set the results to the hores data object
        this.heros = res.data.results;
        // Set the pagination params and text
        this.paginationParams.total = res.data.total;
        this.paginationParams.pagesTotal = Math.ceil(res.data.total / res.data.limit);

        this.setPaginationText(this.paginationParams);
      },
      error => console.log('error', error)
    );
  }

  /// LIST
  // Set Images list
  getImage(path: string, extension: string) {
    return path + '/portrait_small.' + extension;
  }

  // Hero List click action
  openCharDetailsPage(heroID: number) {
    console.log(heroID);
    //this.navCtrl.push()
  }

  /// SEARCH
  // Input change event
  inputChange(event: any) {
    this.paginationParams.currentPage = 1;
    this.paginationParams.offset = 0;
    this.getHeros({ nameStartsWith: event.srcElement.value });
  }

  /// PAGINATION
  // Set the pagination text
  setPaginationText(params: PaginationParams) {
    this.paginationText = 'Page ' + params.currentPage + ' of ' + params.pagesTotal;
  }
  // get the previus page
  prevPage() {
    this.paginationParams.currentPage--;
    const currentoffset = this.setCurrentOffset(this.paginationParams.currentPage);
    this.getHeros({ offset: currentoffset });
  }
  // get the next page
  nextPage() {
    this.paginationParams.currentPage++;
    const currentoffset = this.setCurrentOffset(this.paginationParams.currentPage);
    this.getHeros({ offset: currentoffset });
  }
  // track the swipe event in the footer to set first or last page
  tipPage(event: any) {
    // Event Direction => 2 = left | 4 = right
    if (event.direction == 2) {
      this.paginationParams.currentPage = 1;
    }
    if (event.direction == 4) {
      this.paginationParams.currentPage = this.paginationParams.pagesTotal;
    }
    const currentoffset = this.setCurrentOffset(this.paginationParams.currentPage);

    this.getHeros({ offset: currentoffset });
  }

  private setCurrentOffset(currentPage, pageLimit = this.paginationParams.limit): number {
    return currentPage * (pageLimit - 1);
  }
}
