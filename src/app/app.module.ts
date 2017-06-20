import { LoginStatusService } from './../providers/login-statusService';
import { RegisterPage } from './../pages/lgoin/register/register';
import { Userpage } from './../pages/user/user';

import { HttpService } from './../providers/httpService';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule, Http } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BasicPage } from '../pages/slides/basic/pages';
import { LoginPage } from '../pages/lgoin/login';
import { FindPasswordPage } from '../pages/lgoin/find-password/findPasswrod';
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { Helper } from '../providers/jiguang-helper';
import { NativeService } from '../providers/NativeService';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
   LoginPage,
    BasicPage,
    Userpage,
    FindPasswordPage,
    RegisterPage

  ],
  imports: [
    HttpModule,
    BrowserModule,
   IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
     LoginPage,
    BasicPage,
    Userpage,
    FindPasswordPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    LoginStatusService,
     Helper,
     NativeService,

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
