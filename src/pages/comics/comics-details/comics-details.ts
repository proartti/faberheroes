import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ComicsService } from '../../../app/services/comics.service';
import { ComicDataWrapper, Comic } from '../../../app/models/comics.model';

@Component({
  selector: 'page-comics-details',
  templateUrl: 'comics-details.html'
})
export class ComicsDetailsPage {
  comic = <Comic>{};

  constructor(public navCtrl: NavController, public navParams: NavParams, private comicsServ: ComicsService) {
    // get comic id from navigation params
    const comicID = this.navParams.get('id');

    // Initial set of comic data
    this.getComic(comicID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComicsDetailsPage', this.comic);
  }

  // set the comic data
  getComic(comicID: number) {
    this.comicsServ.getComic(comicID).subscribe(
      (res: ComicDataWrapper) => {
        console.log('comic', res.data.results[0]);

        this.comic = res.data.results[0];
      },
      error => console.log(error)
    );
  }

  // Set main image
  getImage(path: string, extension: string) {
    return path + '/portrait_uncanny.' + extension;
  }

  // Set the hero bio
  getDescription(descriptionText: string) {
    if (descriptionText == '' || descriptionText == null) {
      return 'Comic has no description available';
    } else {
      return descriptionText;
    }
  }
}
