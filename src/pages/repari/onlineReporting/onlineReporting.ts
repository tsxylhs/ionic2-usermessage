
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from "ionic-angular";
import { ToastController } from 'ionic-angular';
import { choseCompComponent } from "../choseComp/choseComp";
@Component({
  selector: 'page-onlineReporting',
  templateUrl: 'onlineReporting.html'
})
export class onlineReportingPage {
  constructor(public navCtrl: NavController,
            public alertCtrl : AlertController,
            public toastCtrl : ToastController) {

  }

  onlineReport(){
      //跳转页面取投保公司
       this.navCtrl.push(choseCompComponent);
  }
  phoneReport(){
      //弹框
      let confirm = this.alertCtrl.create({
        title: '请点击拨打122',
      buttons: [
        {
          text: '拨打122',

          handler: () => {
           // this.navCtrl.push(CameraPage);
          }
        }
      ]
    });
    confirm.present();
  }
  noReport(position: string) {
    let toast = this.toastCtrl.create({
      message: '你已经选择了不报案.',
      duration: 3000,
      position: position
    });

    toast.present(toast);
  }
}
