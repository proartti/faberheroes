import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CharacterDetailsPage } from './character-details/character-details';
import { ListPage } from './list';

import { CharactersService } from '../../app/services/characters.service';

@NgModule({
  declarations: [ListPage, CharacterDetailsPage],
  imports: [IonicPageModule.forChild(ListPage)],
  providers: [CharactersService],
  entryComponents: [ListPage, CharacterDetailsPage]
})
export class ListPageModule {}
