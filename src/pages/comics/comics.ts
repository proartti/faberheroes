import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComicsService } from '../../app/services/comics.service';
import { ComicDataWrapper, Comic, ComicsParameters } from '../../app/models/comics.model';
import { ComicsDetailsPage } from './comics-details/comics-details';
import { PaginationService } from '../../app/services/pagination.service';
import { PaginationParams } from '../../app/models/pagination.model';

@IonicPage()
@Component({
  selector: 'page-comics',
  templateUrl: 'comics.html'
})
export class ComicsPage {
  heroComics: Comic[];
  pagination: PaginationParams;
  heroID: number;
  listLoader = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private comicsServ: ComicsService,
    public paginationServ: PaginationService
  ) {
    // get hero ID from params
    this.heroID = this.navParams.get('heroID');
    // set the heroComics data
    this.getComics(this.heroID, { limit: 20 });

    this.pagination = this.paginationServ.getPager({
      currentPage: 1,
      offset: 0,
      total: 1,
      limit: 20
    });
  }

  // Request the hero comics
  getComics(heroID: number, params: ComicsParameters = {}) {
    // Show loading toast alert
    this.listLoader = true;

    this.comicsServ.getHeroComics(heroID, params).subscribe(
      (res: ComicDataWrapper) => {
        this.listLoader = false;

        this.heroComics = res.data.results;
        // this.setPaginationText(this.pagination);
        // uses the dot-notation (...) to keep the values already set in the object
        this.pagination = this.paginationServ.getPager({
          ...this.pagination,
          total: res.data.total,
          limit: res.data.limit
        });
      },
      error => console.log(error)
    );
  }

  /// LIST
  // Set Images list
  getImage(path: string, extension: string) {
    return path + '/portrait_small.' + extension;
  }
  // open the Comics details
  getComicDetails(comicID: number) {
    this.navCtrl.push(ComicsDetailsPage, { id: comicID });
  }

  /// PAGINATION
  // get the previus page
  setPage(targetPage: number) {
    this.pagination = this.paginationServ.getPager({
      ...this.pagination,
      currentPage: targetPage
    });
    this.getComics(this.heroID, { offset: this.pagination.offset });
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
    this.getComics(this.heroID, { offset: this.pagination.offset });
  }
}
