import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CharactersService } from '../../app/services/characters.service';
import { Character } from '../../app/models/characters.model';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  heros: Character[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public characterServ: CharactersService) {
    this.characterServ.get().subscribe(
      res => {
        this.heros = res.data.results;
      },
      error => console.log('error', error)
    );
  }

  getHeros(event: any) {
    this.characterServ
      .get({ nameStartsWith: event.srcElement.value })
      .subscribe(res => (this.heros = res.data.results), error => console.log('error', error));
  }

  getImage(path: string, extension: string) {
    return path + '/portrait_small.' + extension;
  }
}
