import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComicsPage } from './comics';
import { ComicsDetailsPage } from './comics-details/comics-details';
import { ComicsService } from '../../app/services/comics.service';

@NgModule({
  declarations: [ComicsPage, ComicsDetailsPage],
  imports: [IonicPageModule.forChild(ComicsPage)],
  providers: [ComicsService],
  entryComponents: [ComicsPage, ComicsDetailsPage]
})
export class ComicsPageModule {}
