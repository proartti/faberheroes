import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComicsPage } from './comics';
import { ComicsDetailsPage } from './comics-details/comics-details';
import { ComicsService } from '../../app/services/comics.service';
import { PriceTypePipe } from '../../app/pipes/priceType.pipe';

@NgModule({
  declarations: [ComicsPage, ComicsDetailsPage, PriceTypePipe],
  imports: [IonicPageModule.forChild(ComicsPage)],
  providers: [ComicsService],
  entryComponents: [ComicsPage, ComicsDetailsPage]
})
export class ComicsPageModule {}
