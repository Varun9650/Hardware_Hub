import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { ComparisonPage } from "../comparison/comparison";

@Component({
  selector: 'page-market',
  templateUrl: 'market.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class MarketPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }

    market_Button_6468_clickHandler() {
        this.navCtrl.push( ComparisonPage, {
                data: {"a":"a"}
              });
    }
}