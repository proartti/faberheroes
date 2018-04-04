import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComicsService } from '../../app/services/comics.service';
import { ComicDataWrapper, Comic } from '../../app/models/comics.model';
import { ComicsDetailsPage } from './comics-details/comics-details';

@IonicPage()
@Component({
  selector: 'page-comics',
  templateUrl: 'comics.html'
})
export class ComicsPage {
  heroComics: Comic[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private comicsServ: ComicsService) {
    // get hero ID from params
    let heroID = this.navParams.get('heroID');
    // set the heroComics data
    this.getComics(heroID);
  }

  // Request the hero comics
  getComics(heroID: number) {
    this.comicsServ.getHeroComics(heroID).subscribe(
      (res: ComicDataWrapper) => {
        this.heroComics = res.data.results;
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
}
