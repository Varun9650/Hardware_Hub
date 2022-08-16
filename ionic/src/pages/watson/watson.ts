import { Component,Renderer,NgZone,NgModule } from '@angular/core';
import { NavController,ModalController, LoadingController } from 'ionic-angular';
import { DataStore } from '../../app/dataStore';
import {LiveUpdateProvider} from "../../providers/live-update/live-update";
import WatsonChat from "../../componentScripts/chat";
import { Platform } from "ionic-angular";
import { ElementRef } from "@angular/core";
import { ChangeDetectorRef } from "@angular/core";

@Component({
  selector: 'page-watson',
  templateUrl: 'watson.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})

export class WatsonPage {

  constructor(public navCtrl: NavController, public dataStore:DataStore, public liveUpdateService:LiveUpdateProvider, renderer: Renderer, private zone: NgZone, private cdr: ChangeDetectorRef, public platform: Platform, public elem: ElementRef) {
      this.watsonChat.init(this.url,this.iam_apikey,this.workspaceId,eval('this.shouldSendWatsonAssistantAnalytics'));
      platform.ready().then(() => {this.message()});

  }

    messages = [];
    input: any;
    watsonChat = new WatsonChat();
    pageTagName: any;

    message() {
        this.watsonChat.sendMessage(this.messages, this.input,(err,msgs)=>{ this.zone.run(() => { this.messages = msgs; this.input=''; }); });this.cdr.detectChanges();
    }

    ionViewDidLoad() {
        this.pageTagName = this.elem.nativeElement.tagName.toLowerCase();const scrollContentSelector = this.pageTagName + ' .scroll-content';const scrollElement:HTMLElement =  document.querySelector(scrollContentSelector) as HTMLElement;scrollElement.style.overflow = 'hidden';
        WL.Analytics.log({ fromPage: this.navCtrl.getPrevious(this.navCtrl.getActive()).name, toPage: this.navCtrl.getActive().name }, 'PageTransition ');
        WL.Analytics.send();
    }

    url = "https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/ad7f14b7-cfae-4257-b204-a4baec8bb927";
    iam_apikey = "j7uh3rvpJf4fs90UctcsB9nMrpb2cQ8o95gbA7HArOtg";
    workspaceId = "23ff2d64-5393-4d51-86b0-4bff065a7667";
    shouldSendWatsonAssistantAnalytics = true;
}