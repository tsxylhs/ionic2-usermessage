import { fileTwoInfoPage } from './../repari/fileTwoInfo/fileTwoInfo';
import { ExplainPage } from './../explain/explain';
import { Mine } from './../mine/mine';
import { LoginStatusService } from './../../providers/login-statusService';

import { promptPage } from './../repari/prompt/prompt';
import { LoginPage } from './../lgoin/login';
import { Component } from '@angular/core';
import { NavController,MenuController} from 'ionic-angular';
import * as $ from "jquery";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public menu: MenuController ,public LoginStatusService:LoginStatusService ) {

  }



open(){


 this.LoginStatusService.getUser().then((user)=>{
   if(user!=null){
   console.log(user);
this.navCtrl.push(Mine,user);
   }
   else{
     this.navCtrl.push(LoginPage);
   }
 })

}


openmenu(){
this.navCtrl.push(LoginPage);

}
hidetest(){
  $("#test").hide();
  this.LoginStatusService.Exit();
}
show(){
$("#test").show();
}
//跳转到说明页面
  doExplain(){
    this.navCtrl.push(ExplainPage);
  }
  //openStart
  openStart(){
    this.navCtrl.push(promptPage);
  }

  totest(){
   this.navCtrl.push(fileTwoInfoPage);
  }

//倒计时5分钟
  endDate: number = Date.now() + 30000;
}



