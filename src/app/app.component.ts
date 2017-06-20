
import { BasicPage } from './../pages/slides/basic/pages';
import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginStatusService } from '../providers/login-statusService';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/lgoin/login';
import { Helper } from '../providers/jiguang-helper';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar,public helper:Helper,
   splashScreen: SplashScreen,public loginStatusService:LoginStatusService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.helper.initJpush();
      statusBar.styleDefault();
      splashScreen.hide();

loginStatusService.getFirstInStatus().then((status)=>{
     console.log(status)
     if(status===null||status===true){
         console.log('首次进入应用');
         this.rootPage=BasicPage;
     }
     else
     {
       console.log("再次进入应用");
       loginStatusService.getLogonStatus().then((status)=>{
         if(status===null||status===false)
         {
          // console.log(loginStatusService.getUserID())
         //  this.helper.setAlias(String(1));
            this.rootPage=LoginPage;
         }
         else{
            console.log(loginStatusService.getUserID().then((value)=>{
              console.log("已登录");
          console.log(value);
              this.helper.setAlias(''+value);
              this.rootPage=TabsPage;
            })
            )
         }
       })


     }

})





    });


  }
}
