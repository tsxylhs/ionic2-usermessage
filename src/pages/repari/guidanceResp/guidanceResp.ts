
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { responsibilityPage } from "../responsibility/responsibility";
import { AlertController } from 'ionic-angular';
import { guidanceResultPage } from "../guidanceResult/guidanceResult";

@Component({
  selector: 'page-guidanceResp',
  templateUrl: 'guidanceResp.html'
})
export class guidanceRespPage {
  //  insc : string ;

  constructor(public navCtrl: NavController,
              public alertCtrl : AlertController
              ) {

  }
  // //赋值判断
  // onChoice(cho){
  //   this.insc = cho;
  // }

  goToBack(){
      this.navCtrl.push(responsibilityPage);
  }

   showPrompt() {
    let prompt = this.alertCtrl.create({
      title: '您好:',
      message: "交警给你发来事故责任认定意见,请接收",
      buttons: [
        {
          text: 'ok',
          handler: data => {
            console.log('ok clicked');
            //跳转页面
            this.navCtrl.push(guidanceResultPage);
          }
        }
      ]
    });
    prompt.present();
  }
}
