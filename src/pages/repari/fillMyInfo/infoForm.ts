import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Info }    from './info';
//import { onlineReportingPage } from "../onlineReporting/onlineReporting";
@Component({
  selector: 'info-form',
  templateUrl: './infoForm.html'
})

export class InfoFormComponent {
    //初始的四种地方
  place = ['鲁', '京','沪', '辽'];
  insuranceCompany = ['北京保险有限公司','平安出行保险公司','一路平安保险公司'];
    //新建立一个英雄
  model = new Info('戚长建', this.place[0], 'xy200','17863860441','3713231996012' ,this.insuranceCompany[0]);

  submitted = false;
  constructor(public navCtrl: NavController) {

  }
  onSubmit() {
      this.submitted = true;
    }

  // TODO: Remove this when we're done添加一个diagnostic属性，以返回这个模型的 JSON 形式。在开发过程中，它用于调试，最后清理时会丢弃它。
  get diagnostic() { return JSON.stringify(this.model); }

  newInfomation(){
      this.model = new Info('','','','','' ,'');
  }

  // subInfo(){
  //   this.navCtrl.push(onlineReportingPage);
  // }
}
