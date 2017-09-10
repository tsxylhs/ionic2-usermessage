import { HttpService } from './../../../providers/httpService';
import { LoginStatusService } from './../../../providers/login-statusService';
import { moveTheCar2Page } from './../moveTheCar2/moveTheCar2';
import { Component } from '@angular/core';
import { IonicPage, ViewController ,NavController, NavParams } from 'ionic-angular';
import { NativeService } from "../../../providers/NativeService";
import { DEFAULT_AVATAR } from "../../../providers/Constants";
import { DEFAULT_AVATAR2 } from "../../../providers/Constants";
import { DEFAULT_AVATAR5 } from "../../../providers/Constants";
import { DEFAULT_AVATAR6 } from "../../../providers/Constants";
import { DEFAULT_AVATAR11 } from "../../../providers/Constants";
import { DEFAULT_AVATAR9 } from "../../../providers/Constants";
import { AlertController } from "ionic-angular";

@Component({
  selector: 'page-camera2',
  templateUrl: 'camera2.html',
})
export class Camera2Page {
  isChange:boolean = false;//头像是否改变
  avatarPath:string = DEFAULT_AVATAR;
  avatarPath2:string = DEFAULT_AVATAR2;
  avatarPath5:string = DEFAULT_AVATAR5;
  avatarPath6:string = DEFAULT_AVATAR6;
  avatarPath7:string = DEFAULT_AVATAR9;
  avatarPath8:string = DEFAULT_AVATAR11;
  userID:string;

  imageBase64:string;

  constructor(
    private navCtrl: NavController,
    private viewCtrl:ViewController,
    private navParams:NavParams,
    private HttpService:HttpService,
    private nativeService:NativeService,
    private alertCtrl : AlertController,
    private LoginStatusService:LoginStatusService
    ) {
      //this.avatarPath = navParams.get('avatarPath');
       this.LoginStatusService.getUserID().then((value)=>{
           this.userID=value;
            })
  }

getPicture(type,num) {//1拍照,0从图库选择
    let options = {
      targetWidth: 256,
      targetHeight: 256
    };

    if (type == 1 && num == 1) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,1);
      });
    }else if(type == 1 && num == 2) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,2);
      });
    }else if(type == 1 && num == 5) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,5);
      });
    }else if(type == 1 && num == 6) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,6);
      });
    }else if(type == 1 && num == 7) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,7);
      });
    }else if(type == 1 && num == 8) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,8);
      });
    }

    //从相册中选
    else{
      this.nativeService.getPictureByPhotoLibrary({}).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,0);
      });
    }
  }
  private getPictureSuccess(imageBase64,num) {
    this.isChange = true;
    this.imageBase64 = <string>imageBase64;
    if(num == 1){
      this.avatarPath = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 2){
      this.avatarPath2 = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 5){
      this.avatarPath5 = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 6){
      this.avatarPath6 = 'data:image/jpg;base64,' + imageBase64;
    } else if(num == 7){
      this.avatarPath7 = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 8){
      this.avatarPath8 = 'data:image/jpg;base64,' + imageBase64;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  //解释
  doexplain(type){
    if(type == 1){
      let alert = this.alertCtrl.create({
        title: '侧前方照片:',
        subTitle: '从己方车辆的侧前方拍摄,包含对方车辆',
        buttons: ['确定']
      });
      alert.present();
    }else if(type == 2){
      let alert = this.alertCtrl.create({
        title: '侧后方照片:',
        subTitle: '从对方车辆的侧后方拍摄,包含己方车辆',
        buttons: ['确定']
      });
      alert.present();
    }else if(type == 3){
      let alert = this.alertCtrl.create({
        title: '碰撞部位照片:',
        subTitle: '从中间拍摄两车碰撞部位',
        buttons: ['确定']
      });
      alert.present();
    }else if(type == 4){
      let alert = this.alertCtrl.create({
        title: '其他现场照片:',
        subTitle: '事故线程其他照片',
        buttons: ['确定']
      });
      alert.present();
    }else if(type == 7){
      let alert = this.alertCtrl.create({
        title: '己方行驶证照片:',
        subTitle: '拍摄己方行驶证照片(内容清晰)',
        buttons: ['确定']
      });
      alert.present();
    }else if(type == 8){
      let alert = this.alertCtrl.create({
        title: '己方驾驶证照片:',
        subTitle: '拍摄己方驾驶证照片(内容清晰)',
        buttons: ['确定']
      });
      alert.present();
    }
  }

  firstStepOk(){
  let message={
 userID:this.userID,
 driveme:this.avatarPath7,
 driveme2:this.avatarPath8,
 qian:this.avatarPath,
hou:this.avatarPath2,
pengzhuang:this.avatarPath5,
qita:this.avatarPath6
}
this.HttpService.post('avatar', message).subscribe(
      data => {
      console.log('hah');
 }
 )


    this.navCtrl.push(moveTheCar2Page);
  }
}
