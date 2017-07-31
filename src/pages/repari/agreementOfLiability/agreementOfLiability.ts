import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Info }    from '../fillMyInfo/info';
import { onlineReportingPage } from "../onlineReporting/onlineReporting";

@Component({
  selector: 'agreementOfLiability-page',
  templateUrl: './agreementOfLiability.html'
})

export class agreementOfLiabilityPage {
   result1 : string ="全责";
   result2 : string ="无责";
    //初始的四种地方
  place = ['鲁', '京','沪', '辽'];
  insuranceCompany = ['北京保险有限公司','平安出行保险公司','一路平安保险公司'];
    //新建立一个英雄
  model = new Info('戚长建', this.place[0], 'xy200','17863860441','3713231996012' ,this.insuranceCompany[0]);

  constructor(public navCtrl: NavController) {

  }

  toOnlineReporting(){
   this.navCtrl.push(onlineReportingPage);
  }
}
