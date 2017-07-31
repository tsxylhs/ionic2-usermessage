import { Component } from '@angular/core';
import { IonicPage, ViewController ,NavController, NavParams } from 'ionic-angular';
import { NativeService } from "../../../providers/NativeService";
import { DEFAULT_AVATAR } from "../../../providers/Constants";
import { DEFAULT_AVATAR2 } from "../../../providers/Constants";
import { DEFAULT_AVATAR3 } from "../../../providers/Constants";
import { DEFAULT_AVATAR4 } from "../../../providers/Constants";
import { DEFAULT_AVATAR5 } from "../../../providers/Constants";
import { DEFAULT_AVATAR6 } from "../../../providers/Constants";
import { DEFAULT_AVATAR11 } from "../../../providers/Constants";
import { DEFAULT_AVATAR9 } from "../../../providers/Constants";
import { AlertController } from "ionic-angular";
import { moveTheCarPage } from "../moveTheCar/moveTheCar";
/**
 * Generated class for the CameraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  isChange:boolean = false;//头像是否改变
  avatarPath:string = DEFAULT_AVATAR;
  avatarPath2:string = DEFAULT_AVATAR2;
  avatarPath3:string = DEFAULT_AVATAR3;
  avatarPath4:string = DEFAULT_AVATAR4;
  avatarPath5:string = DEFAULT_AVATAR5;
  avatarPath6:string = DEFAULT_AVATAR6;
  avatarPath7:string = DEFAULT_AVATAR9;
  avatarPath8:string = DEFAULT_AVATAR11;
  avatarPath9:string = DEFAULT_AVATAR9;
  avatarPath10:string = DEFAULT_AVATAR11;

  imageBase64:string;

  constructor(
    private navCtrl: NavController,
    private viewCtrl:ViewController,
    private navParams:NavParams,
    private nativeService:NativeService,
    private alertCtrl : AlertController
    ) {
      //this.avatarPath = navParams.get('avatarPath');
  }
  /**
 * 调用本地摄像机
 * @param type 用户的选择 1 直接拍照 ！1 用户从手机相册中选择
 */

//start1
/*
  getPicture(type) {//1拍照,0从图库选择
    let options = {
      targetWidth: 256,
      targetHeight: 256
    };

    if (type == 1) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });

    }
    //从相册中选
    else{
      this.nativeService.getPictureByPhotoLibrary({}).then(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    }
  }
*/
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
    }else if(type == 1 && num == 3) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,3);
      });
    }else if(type == 1 && num == 4) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,4);
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
    }else if(type == 1 && num == 9) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,9);
      });
    }else if(type == 1 && num == 10) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64,10);
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
    }else if(num == 3){
      this.avatarPath3 = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 4){
      this.avatarPath4 = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 5){
      this.avatarPath5 = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 6){
      this.avatarPath6 = 'data:image/jpg;base64,' + imageBase64;
    } else if(num == 7){
      this.avatarPath7 = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 8){
      this.avatarPath8 = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 9){
      this.avatarPath9 = 'data:image/jpg;base64,' + imageBase64;
    }else if(num == 10){
      this.avatarPath10 = 'data:image/jpg;base64,' + imageBase64;
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
        title: '本方车全景照片:',
        subTitle: '拍取己方车辆的全景照片',
        buttons: ['确定']
      });
      alert.present();
    }else if(type == 4){
      let alert = this.alertCtrl.create({
        title: '对方车全景照片:',
        subTitle: '拍取对方车辆的全景照片',
        buttons: ['确定']
      });
      alert.present();
    }else if(type == 5){
      let alert = this.alertCtrl.create({
        title: '碰撞部位照片:',
        subTitle: '从中间拍摄两车碰撞部位',
        buttons: ['确定']
      });
      alert.present();
    }else if(type == 6){
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
    }else if(type == 9){
      let alert = this.alertCtrl.create({
        title: '对方行驶证照片:',
        subTitle: '拍摄对方行驶证照片(内容清晰)',
        buttons: ['确定']
      });
      alert.present();
    }else if(type == 10){
      let alert = this.alertCtrl.create({
        title: '对方驾驶证照片:',
        subTitle: '拍摄对方驾驶证照片(内容清晰)',
        buttons: ['确定']
      });
      alert.present();
    }
  }

  firstStepOk(){
   this.navCtrl.push(moveTheCarPage);
  }
}
