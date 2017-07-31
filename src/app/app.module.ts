import { oneCarOKPage } from './../pages/repari/oneCarOK/oneCarOK';
import { onlineReportingPage } from './../pages/repari/onlineReporting/onlineReporting';
import { agreementOfLiabilityPage } from './../pages/repari/agreementOfLiability/agreementOfLiability';
import { SignaturePadPage } from './../pages/repari/signaturePad/signaturePad';
import { uncontestedSignaturePage } from './../pages/repari/uncontestedSignature/uncontestedSignature';
import { Info } from './../pages/repari/fillMyInfo/info';
import { moveTheCarPage } from './../pages/repari/moveTheCar/moveTheCar';
import { accidentTreatmentPage } from './../pages/repari/accidentTreatment/accidentTreatment';
import { Camera2Page } from './../pages/repari/camera2/camera2';
import { prompt2Page } from './../pages/repari/prompt2/prompt2';
import { typeAccidentPage } from './../pages/repari/typeAccident/typeAccident';

import { MineModule } from './../pages/mine/mine.module';
import { LoginStatusService } from './../providers/login-statusService';
import { RegisterPage } from './../pages/lgoin/register/register';
import { Userpage } from './../pages/user/user';

import { HttpService } from './../providers/httpService';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BasicPage } from '../pages/slides/basic/pages';
import { LoginPage } from '../pages/lgoin/login';
import { FindPasswordPage } from '../pages/lgoin/find-password/findPasswrod';
import { IonicStorageModule } from '@ionic/storage';
import { Helper } from '../providers/jiguang-helper';
import { NativeService } from '../providers/NativeService';
import { Camera } from '@ionic-native/camera';
import { Toast } from '@ionic-native/toast';
import { File } from '@ionic-native/file';
import { ImagePicker } from '@ionic-native/image-picker';
import { promptPage } from '../pages/repari/prompt/prompt';
import { ExplainPage } from '../pages/explain/explain';
import { CameraPage } from '../pages/repari/camera/camera';
import { accidentSituationPage } from '../pages/repari/accidentSituation/accidentSituation';
import { fileTwoInfoPage } from '../pages/repari/fileTwoInfo/fileTwoInfo';
import { InfoFormComponent } from '../pages/repari/fillMyInfo/infoForm';
import { fillMyInfoPage } from '../pages/repari/fillMyInfo/fillMyInfo';
import { responsibilityPage } from '../pages/repari/responsibility/responsibility';
import { guidanceRespPage } from '../pages/repari/guidanceResp/guidanceResp';
import { guidanceResultPage } from '../pages/repari/guidanceResult/guidanceResult';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { choseCompComponent } from '../pages/repari/choseComp/choseComp';
import { moveTheCar2Page } from '../pages/repari/moveTheCar2/moveTheCar2';

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
    RegisterPage,
    promptPage,
    typeAccidentPage,
    ExplainPage,
    prompt2Page,
    Camera2Page,
    accidentTreatmentPage,
    CameraPage,
    moveTheCarPage,
    accidentSituationPage,
    fileTwoInfoPage,
    InfoFormComponent,
    fillMyInfoPage,
    responsibilityPage,
    guidanceResultPage,
    guidanceRespPage,
    uncontestedSignaturePage,
    SignaturePad,
    SignaturePadPage,
     agreementOfLiabilityPage,
     onlineReportingPage,
     choseCompComponent,
     oneCarOKPage,
   moveTheCar2Page

  ],
  imports: [
    HttpModule,
    BrowserModule,
    MineModule,

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
    RegisterPage,
    promptPage,
    typeAccidentPage,
    ExplainPage,
    prompt2Page,
    Camera2Page,
    accidentTreatmentPage,
    CameraPage,
    moveTheCarPage,
    accidentSituationPage,
    fileTwoInfoPage,
    InfoFormComponent,
    fillMyInfoPage,
    responsibilityPage,
      guidanceResultPage,
    guidanceRespPage,
    uncontestedSignaturePage,
    SignaturePad,
    SignaturePadPage,
     agreementOfLiabilityPage,
     onlineReportingPage,
     choseCompComponent,
     oneCarOKPage,
     moveTheCar2Page


  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,

    LoginStatusService,
     Helper,
     NativeService,
          Camera,
          Toast,
          File,
          ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
