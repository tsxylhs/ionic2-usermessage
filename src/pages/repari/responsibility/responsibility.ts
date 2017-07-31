
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { uncontestedSignaturePage } from "../uncontestedSignature/uncontestedSignature";
import { guidanceRespPage } from "../guidanceResp/guidanceResp";
@Component({
  selector: 'page-responsibility',
  templateUrl: 'responsibility.html'
})
export class responsibilityPage {
   insc : string ;
   insc2 : string ;
  constructor(public navCtrl: NavController) {

  }
  //赋值判断
  onChoice(cho){
    this.insc = cho;
  }
  onChoice2(cho2){
    this.insc2 = cho2;
  }

//跳转到责任页面
negotiationResult(type){
  if(type == 0){
    this.navCtrl.push(guidanceRespPage);
  }else{
   this.navCtrl.push(uncontestedSignaturePage);
  }
}
}
