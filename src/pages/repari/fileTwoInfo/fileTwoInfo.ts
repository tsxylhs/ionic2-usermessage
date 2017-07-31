
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { responsibilityPage } from "../responsibility/responsibility";
@Component({
  selector: 'page-fileTwoInfo',
  templateUrl: 'fileTwoInfo.html'
})
export class fileTwoInfoPage {
  constructor(public navCtrl: NavController) {

  }

//跳转到责任页面
tonext(){
  this.navCtrl.push(responsibilityPage);
}
}
