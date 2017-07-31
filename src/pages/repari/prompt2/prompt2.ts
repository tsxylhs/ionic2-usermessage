import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplainPage } from "../../explain/explain";
import { AlertController } from "ionic-angular";
import { accidentTreatmentPage } from "../accidentTreatment/accidentTreatment";
@Component({
  selector: 'page-prompt2',
  templateUrl: 'prompt2.html'
})
export class prompt2Page {

  constructor(
      public navCtrl: NavController,
      public alertCtrl : AlertController
            ) {

  }
  //开始处理
  toStart(){
     this.navCtrl.push(accidentTreatmentPage);
  }

  //跳转到说明页面
  doExplain(){
    this.navCtrl.push(ExplainPage);
  }

   showAlert() {
    let alert = this.alertCtrl.create({
      title: '信息提示!',
      subTitle: '如有以上情况请拨打122!',
      buttons: ['确定']
    });
    alert.present();
  }
}
