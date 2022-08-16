import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { DataStore } from './dataStore';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LiveUpdateProvider } from '../providers/live-update/live-update';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WatsonPage } from "../pages/watson/watson";
import { DbPage } from "../pages/db/db";
import { CreateModalPage } from "../componentScripts/listViewCreateModal";
import { DetailModalPage } from "../componentScripts/listViewDetailModal";
import { SearchModalPage } from "../componentScripts/listViewSearchModal";
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

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ,WatsonPage,DbPage,CreateModalPage,DetailModalPage,SearchModalPage,AboutPage  ,MarketPage ,DifferencePage,AmdnvidiaPage,Chart1Page,ComparisonPage,BuyPage ,ButtonsPage,AhmedabadPage,BangalorePage,ChandigarhPage,DehradunPage,IndorePage,NewdelhiPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ,WatsonPage,DbPage,CreateModalPage,DetailModalPage,SearchModalPage,AboutPage  ,MarketPage ,DifferencePage,AmdnvidiaPage,Chart1Page,ComparisonPage,BuyPage ,ButtonsPage,AhmedabadPage,BangalorePage,ChandigarhPage,DehradunPage,IndorePage,NewdelhiPage],
  providers: [
    StatusBar,
    SplashScreen,
    DataStore,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LiveUpdateProvider
  ]
})
export class AppModule {}
