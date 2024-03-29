import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { BuyPage } from "../buy/buy";

@Component({
  selector: 'page-chandigarh',
  templateUrl: 'chandigarh.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class ChandigarhPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    chandigarh_Button_414_clickHandler() {
        this.navCtrl.push( BuyPage, {
                data: {"a":"a"}
              });
    }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }
}