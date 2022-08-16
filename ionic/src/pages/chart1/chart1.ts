import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { HomePage } from "../home/home";

@Component({
  selector: 'page-chart1',
  templateUrl: 'chart1.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class Chart1Page {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }

    chart1_Button_3317_clickHandler() {
        this.navCtrl.push( HomePage, {
                data: {"a":"a"}
              });
    }
}