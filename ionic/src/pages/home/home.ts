import { Component, Renderer, NgZone } from "@angular/core";
import { NavController, ModalController } from "ionic-angular";
import { DataStore } from "../../app/dataStore";
import { WatsonPage } from "../watson/watson";
import { DbPage } from "../db/db";
import ChallengeHandler from "../../componentScripts/challengeHandler";
import { AboutPage } from "../about/about";
import { MarketPage } from "../market/market";
import { BuyPage } from "../buy/buy";
import { ButtonsPage } from "../buttons/buttons";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController,public renderer:Renderer, public dataStore: DataStore) {
      this.challengeHandlerComponent = new ChallengeHandler(this.securityCheckName, (err)=>{if(!err){this.navCtrl.push(this.challHandlerSuccessPage);}});}

    home_Button_4367_clickHandler() {
        this.navCtrl.push( WatsonPage, {
                data: {"a":"a"}
              });
    }

    home_Button_9185_clickHandler() {
        this.navCtrl.push( DbPage, {
                data: {"a":"a"}
              });
    }

    challengeHandlerComponent: ChallengeHandler;
    username: string;
    password: string;

    login() {
        this.challengeHandlerComponent.login(this.username, this.password);
    }

    securityCheckName = "UserLogin";
    challHandlerSuccessPage = ButtonsPage;
}
