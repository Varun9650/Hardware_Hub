import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { AmdnvidiaPage } from "../amdnvidia/amdnvidia";

@Component({
  selector: 'page-difference',
  templateUrl: 'difference.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class DifferencePage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    difference_Button_5824_clickHandler() {
        this.navCtrl.push( AmdnvidiaPage, {
                data: {"a":"a"}
              });
    }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }
}