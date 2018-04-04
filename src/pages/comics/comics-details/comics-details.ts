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
    console.log(this.navParams.get('id'));

    const comicID = this.navParams.get('id');

    console.log(comicID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComicsDetailsPage', this.comic);
  }
}
