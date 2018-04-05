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
  bgColorRGB: string;
  defaultBG = 'rgb(255, 255, 255)';

  constructor(public navCtrl: NavController, public navParams: NavParams, private charactersServ: CharactersService) {
    this.heroID = this.navParams.get('id');
    this.bgColorRGB = this.defaultBG;

    this.charactersServ.getHero(this.heroID).subscribe(
      (res: CharacterDataWrapper) => {
        console.log(res);

        this.hero = res.data.results[0];

        const imgPath = this.getImage(this.hero.thumbnail.path, this.hero.thumbnail.extension);
        this.setImageColor(imgPath);
      },
      error => console.log(error)
    );
  }

  // Set main image path
  getImage(path: string, extension: string) {
    return path + '/standard_fantastic.' + extension;
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

  // Set the background Color based on the avarege color of the charactere's image
  private setImageColor(imgPath: string) {
    // load the character's image as a Blob
    this.charactersServ.getImageData(imgPath).subscribe((res: Blob) => {
      console.log('blob', res);
      // use the Image Blob to create a ImageBitmat Object
      createImageBitmap(res, 0, 0, 120, 90).then((i: ImageBitmap) => {
        // Use the ImageBitmat to analyse the image's colors and retur the avarage RGB value as a string
        this.bgColorRGB = this.charactersServ.getAverageRGB(i);
      });
    });
  }
}
