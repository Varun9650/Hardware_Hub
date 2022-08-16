import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { AhmedabadPage } from "../ahmedabad/ahmedabad";
import { BangalorePage } from "../bangalore/bangalore";
import { ChandigarhPage } from "../chandigarh/chandigarh";
import { DehradunPage } from "../dehradun/dehradun";
import { IndorePage } from "../indore/indore";
import { NewdelhiPage } from "../newdelhi/newdelhi";

@Component({
  selector: 'page-buy',
  templateUrl: 'buy.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class BuyPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }

    buy_Button_6463_clickHandler() {
        this.navCtrl.push( AhmedabadPage, {
                data: {"a":"a"}
              });
    }

    buy_Button_5710_clickHandler() {
        this.navCtrl.push( BangalorePage, {
                data: {"a":"a"}
              });
    }

    buy_Button_7053_clickHandler() {
        this.navCtrl.push( ChandigarhPage, {
                data: {"a":"a"}
              });
    }

    buy_Button_2059_clickHandler() {
        this.navCtrl.push( DehradunPage, {
                data: {"a":"a"}
              });
    }

    buy_Button_8358_clickHandler() {
        this.navCtrl.push( IndorePage, {
                data: {"a":"a"}
              });
    }

    buy_Button_9866_clickHandler() {
        this.navCtrl.push( NewdelhiPage, {
                data: {"a":"a"}
              });
    }
}