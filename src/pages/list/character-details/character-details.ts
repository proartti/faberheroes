import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharactersService } from '../../../app/services/characters.service';
import { CharacterDataWrapper, Character } from '../../../app/models/characters.model';

import { ComicsPage } from '../../comics/comics';

@Component({
  selector: 'page-character-details',
  templateUrl: 'character-details.html'
})
export class CharacterDetailsPage {
  hero = <Character>{};
  heroID: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private charactersServ: CharactersService) {
    console.log(this.navParams.get('id'));

    this.heroID = this.navParams.get('id');

    this.charactersServ.getHero(this.heroID).subscribe(
      (res: CharacterDataWrapper) => {
        console.log(res);
        this.hero = res.data.results[0];
      },
      error => console.log(error)
    );
  }

  // Set main image
  getImage(path: string, extension: string) {
    return path + '/portrait_xlarge.' + extension;
  }

  // Set the hero bio
  getBio(bioText: string) {
    if (bioText == '') {
      return 'Hero has no bio available';
    } else {
      return bioText;
    }
  }

  // comic list action
  openComicsPage() {
    this.navCtrl.push(ComicsPage, { heroID: this.heroID });
  }
}
