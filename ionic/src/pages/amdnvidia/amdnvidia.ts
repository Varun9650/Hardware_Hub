import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { Chart1Page } from "../chart1/chart1";

@Component({
  selector: 'page-amdnvidia',
  templateUrl: 'amdnvidia.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class AmdnvidiaPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    amdnvidia_Button_7304_clickHandler() {
        this.navCtrl.push( Chart1Page, {
                data: {"a":"a"}
              });
    }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }
}