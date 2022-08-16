import { Component, ViewChild, Renderer, ChangeDetectorRef,NgModule } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LiveUpdateProvider } from "../providers/live-update/live-update";
import { WatsonPage } from "../pages/watson/watson";
import { DbPage } from "../pages/db/db";
import { AboutPage } from "../pages/about/about";
import { MarketPage } from "../pages/market/market";
import { DifferencePage } from "../pages/difference/difference";
import { AmdnvidiaPage } from "../pages/amdnvidia/amdnvidia";
import { Chart1Page } from "../pages/chart1/chart1";
import { ComparisonPage } from "../pages/comparison/comparison";
import { BuyPage } from "../pages/buy/buy";
import { ButtonsPage } from "../pages/buttons/buttons";
import { AhmedabadPage } from "../pages/ahmedabad/ahmedabad";
import { BangalorePage } from "../pages/bangalore/bangalore";
import { ChandigarhPage } from "../pages/chandigarh/chandigarh";
import { DehradunPage } from "../pages/dehradun/dehradun";
import { IndorePage } from "../pages/indore/indore";
import { NewdelhiPage } from "../pages/newdelhi/newdelhi";

@Component({
  templateUrl: 'app.html'
})

@NgModule({
  providers: [
      LiveUpdateProvider
  ]
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private renderer: Renderer, private cdr: ChangeDetectorRef,private liveUpdateService:LiveUpdateProvider) {
    renderer.listenGlobal('document', 'mfpjsloaded', () => {
      this.initializeApp(renderer, cdr);
    });

    // used for an example of ngFor and navigation
    this.pages = [
                                                                                                                                                      { title: 'Home', component: HomePage } ,{title:'watson', component: WatsonPage} ,{title:'db', component: DbPage} ,{title:'about', component: AboutPage} ,{title:'market', component: MarketPage}  ,{title:'difference', component: DifferencePage} ,{title:'amdnvidia', component: AmdnvidiaPage} ,{title:'chart1', component: Chart1Page} ,{title:'comparison', component: ComparisonPage} ,{title:'buy', component: BuyPage}  ,{title:'buttons', component: ButtonsPage} ,{title:'ahmedabad', component: AhmedabadPage} ,{title:'bangalore', component: BangalorePage} ,{title:'chandigarh', component: ChandigarhPage} ,{title:'dehradun', component: DehradunPage} ,{title:'indore', component: IndorePage} ,{title:'newdelhi', component: NewdelhiPage}  
                                                                                                                                                    ];
      renderer.listenGlobal('document', 'mfpjsloaded', () => { WL.Analytics.enable();});

  }

    initializeApp(renderer, cdr) {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.rootPage = HomePage;
            cdr.detectChanges();
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.initializePush();        
});
    }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

    initializePush() {

        if (this.platform.is("ios") || this.platform.is("android")) {
            MFPPush.initialize(
                function(successResponse) {
                    MFPPush.registerNotificationsCallback(notificationReceived);
                    WLAuthorizationManager.obtainAccessToken("push.mobileclient").then(
                        function(accessToken) {
                            MFPPush.registerDevice(null, successCallback, failureCallback);
                        }
                    );
                },
                function(failureResponse) {
                    console.log("Failed to initialize");
                }
            );
        }
    }
}
declare let MFPPush: any;
let notificationReceived = function(message) {
            if (message.alert.body !== undefined) {
                alert(message.alert.body);
            } else {
                alert(message.alert);
            }
          };
let successCallback = function(response) { 
                           console.log("Success: " + JSON.stringify(response));
                         };
let failureCallback = function(response) { 
                           console.log("Error: " + JSON.stringify(response)); 
                         };
