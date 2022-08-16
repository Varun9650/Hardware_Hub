import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { DifferencePage } from "../difference/difference";

@Component({
  selector: 'page-comparison',
  templateUrl: 'comparison.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class ComparisonPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }

    comparison_Button_5035_clickHandler() {
        this.navCtrl.push( DifferencePage, {
                data: {"a":"a"}
              });
    }
}