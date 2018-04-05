import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

import { CharactersService } from '../../app/services/characters.service';
import { PaginationService } from '../../app/services/pagination.service';
import { CharacterDataWrapper, Character, CharactersParameters } from '../../app/models/characters.model';
import { PaginationParams } from '../../app/models/pagination.model';
import { CharacterDetailsPage } from './character-details/character-details';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  heroes: Character[] = [];
  pagination: PaginationParams;
  paginationText: string;
  searhInput: string;
  listLoader = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public characterServ: CharactersService,
    private paginationServ: PaginationService
  ) {
    // Set the heros initial data
    this.getHeroes();

    // Reset Pagination to default
    this.pagination = this.paginationServ.getPager({
      currentPage: 1,
      offset: 0,
      total: 1,
      limit: 20
    });
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

        // this.setPaginationText(this.pagination);
        // uses the dot-notation (...) to keep the values already set in the object
        this.pagination = this.paginationServ.getPager({
          ...this.pagination,
          total: res.data.total,
          limit: res.data.limit
        });
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
    this.pagination.currentPage = 1;
    this.pagination.offset = 0;
    this.getHeroes({ nameStartsWith: event.srcElement.value });
  }

  /// PAGINATION
  // Set the pagination text
  setPaginationText(params: PaginationParams) {
    this.paginationText = 'Page ' + params.currentPage + ' of ' + params.pagesTotal;
  }
  // get the previus page
  setPage(targetPage: number) {
    this.pagination = this.paginationServ.getPager({
      ...this.pagination,
      currentPage: targetPage
    });
    this.getHeroes({ offset: this.pagination.offset });
  }

  // track the swipe event in the footer to set first or last page
  tipPage(event: any) {
    // Set the target page based on the swipe event
    // Event Direction => 2 = left | 4 = right
    if (event.direction == 2) {
      this.pagination.currentPage = 1;
    }
    if (event.direction == 4) {
      this.pagination.currentPage = this.pagination.pagesTotal;
    }
    // update the paginationsParams object
    this.pagination = this.paginationServ.getPager(this.pagination);
    // update the list
    this.getHeroes({ offset: this.pagination.offset });
  }
}
