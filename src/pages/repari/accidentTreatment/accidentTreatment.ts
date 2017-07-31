import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplainPage } from "../../explain/explain";
import { CameraPage } from "../camera/camera";
import { AlertController } from "ionic-angular";

@Component({
  selector: 'page-accidentTreatment',
  templateUrl: 'accidentTreatment.html'
})
export class accidentTreatmentPage {

  constructor(
      public navCtrl: NavController,
      public alertCtrl : AlertController
      ) {

  }
  //跳转到说明页面
  doExplain(){
    this.navCtrl.push(ExplainPage);
  }

   showAlert() {
    let alert = this.alertCtrl.create({
      title: '提示!',
      subTitle: '请点击第一步开始取证!',
      buttons: ['朕知道了']
    });
    alert.present();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: '温馨提示:',
      message: '请在确保事故车辆后方没有来车时或现场已经发生拥挤不会发生危险的情况下,再对现场事故现场拍照取证.',
      buttons: [
        {
          text: '知道了',
          handler: () => {
           this.navCtrl.push(CameraPage);
          }
        }
      ]
    });
    confirm.present();
  }
  //跳转到拍照也买能
  doCamera(){
     this.navCtrl.push(CameraPage);
  }
}
