import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { CharactersService } from '../../app/services/characters.service';
import {
  CharacterDataWrapper,
  Character,
  CharactersParameters,
  PaginationParams
} from '../../app/models/characters.model';
import { CharacterDetailsPage } from './character-details/character-details';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  heroes: Character[] = [];
  paginationParams: PaginationParams;
  paginationText: string;
  searhInput: string;
  listLoader = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public characterServ: CharactersService) {
    // Set the heros initial data
    this.getHeroes();

    // Reset Pagination and define default limit
    this.paginationParams = {
      limit: 20,
      currentPage: 1
    };
  }

  // Set the Heros Data
  getHeroes(params: CharactersParameters = {}) {
    // Show loading toast alert
    this.listLoader = true;
    // if there is value in the searchbar add to the search params
    if (this.searhInput !== '') {
      params.nameStartsWith = this.searhInput;
    }
    // Call the Character Service with custon params
    this.characterServ.get(params).subscribe(
      (res: CharacterDataWrapper) => {
        // Hide loading
        this.listLoader = false;
        // set the results to the hores data object
        this.heroes = res.data.results;
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
    this.navCtrl.push(CharacterDetailsPage, { id: heroID });
  }

  /// SEARCH
  // Input change event
  inputChange(event: any) {
    this.paginationParams.currentPage = 1;
    this.paginationParams.offset = 0;
    this.getHeroes({ nameStartsWith: event.srcElement.value });
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
    this.getHeroes({ offset: currentoffset });
  }
  // get the next page
  nextPage() {
    this.paginationParams.currentPage++;
    const currentoffset = this.setCurrentOffset(this.paginationParams.currentPage);
    this.getHeroes({ offset: currentoffset });
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

    this.getHeroes({ offset: currentoffset });
  }

  private setCurrentOffset(currentPage, pageLimit = this.paginationParams.limit): number {
    return currentPage * (pageLimit - 1);
  }
}
