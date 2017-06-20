import { LoginStatusService } from './../../providers/login-statusService';
import { LoginPage } from './../lgoin/login';
import { Component } from '@angular/core';
import { NavController,MenuController} from 'ionic-angular';
import * as $ from "jquery";
import { Userpage } from '../user/user';






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
this.navCtrl.push(Userpage,user);
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

}
