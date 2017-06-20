import { NativeService } from './../../providers/NativeService';
import { LoginStatusService } from './../../providers/login-statusService';
import { LoginPage } from './../lgoin/login';
import { Component } from '@angular/core';
import { NavController, MenuController, ViewController, viewCtrl } from 'ionic-angular';
import * as $ from "jquery";
import { Userpage } from '../user/user';






@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  isChange: boolean = false;
      avatarPath: string;
      imageBase64: string;
  constructor(public navCtrl: NavController,public viewCtrl:ViewController,public nativeService:NativeService,public menu: MenuController ,public LoginStatusService:LoginStatusService ) {
         this.avatarPath="";
  }

getPicture(type) {//1拍照,0从图库选择
        let options = {
          targetWidth: 400,
         targetHeight: 400
        };
        if (type == 1) {
          this.nativeService.getPictureByCamera(options).then(imageBase64 => {
            this.getPictureSuccess(imageBase64);
          });
       } else {
          this.nativeService.getPictureByPhotoLibrary(options).then(imageBase64 => {
            this.getPictureSuccess(imageBase64);
          });
        }
      }

      private getPictureSuccess(imageBase64) {
        this.isChange = true;
        this.imageBase64 = <string>imageBase64;
        this.avatarPath = 'data:image/jpeg;base64,' + imageBase64;
      }

      saveAvatar() {
        if (this.isChange) {
          console.log(this.imageBase64);//这是头像数据.
          this.nativeService.showLoading('正在上传....');
          this.viewCtrl.dismiss({avatarPath: this.avatarPath});//这里可以把头像传出去.
        } else {
          this.dismiss();
        }
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
  dismiss() {
        this.viewCtrl.dismiss();
      }
}
