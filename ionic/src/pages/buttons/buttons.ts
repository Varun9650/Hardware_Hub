import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import { WatsonPage } from "../watson/watson";
import { DbPage } from "../db/db";
import { MarketPage } from "../market/market";
import { BuyPage } from "../buy/buy";
import { AboutPage } from "../about/about";

@Component({
  selector: 'page-buttons',
  templateUrl: 'buttons.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class ButtonsPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider) {

  }

    buttons_Button_5055_clickHandler() {
        this.navCtrl.push( WatsonPage, {
                data: {"a":"a"}
              });
    }

    buttons_Button_3038_clickHandler() {
        this.navCtrl.push( DbPage, {
                data: {"a":"a"}
              });
    }

    buttons_Button_8429_clickHandler() {
        this.navCtrl.push( MarketPage, {
                data: {"a":"a"}
              });
    }

    buttons_Button_8460_clickHandler() {
        this.navCtrl.push( BuyPage, {
                data: {"a":"a"}
              });
    }

    buttons_Button_9512_clickHandler() {
        this.navCtrl.push( DbPage, {
                data: {"a":"a"}
              });
    }

    buttons_Button_1639_clickHandler() {
        this.navCtrl.push( MarketPage, {
                data: {"a":"a"}
              });
    }

    buttons_Button_8482_clickHandler() {
        this.navCtrl.push( BuyPage, {
                data: {"a":"a"}
              });
    }

    ionViewDidLoad() {
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }

    buttons_Button_1803_clickHandler() {
        this.navCtrl.push( AboutPage, {
                data: {"a":"a"}
              });
    }
}