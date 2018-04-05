import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listPage = ListPage;
  showWelcome = false;
  constructor(public navCtrl: NavController) {}

  ionViewDidEnter() {
    this.showWelcome = true;
  }

  ionViewWillLeave() {
    this.showWelcome = false;
  }
}
