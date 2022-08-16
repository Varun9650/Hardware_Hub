import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { BuyPage } from "../buy/buy";

@Component({
  selector: 'page-newdelhi',
  templateUrl: 'newdelhi.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class NewdelhiPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    newdelhi_Button_7570_clickHandler() {
        this.navCtrl.push( BuyPage, {
                data: {"a":"a"}
              });
    }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }
}