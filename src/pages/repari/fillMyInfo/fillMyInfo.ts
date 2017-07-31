
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { onlineReportingPage } from "../onlineReporting/onlineReporting";
@Component({
  selector: 'page-fillMyInfo',
  templateUrl: 'fillMyInfo.html'
})
export class fillMyInfoPage {
  constructor(public navCtrl: NavController) {

  }

  subInfo(){
    this.navCtrl.push(onlineReportingPage);
  }
}
