
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { uncontestedSignaturePage } from "../uncontestedSignature/uncontestedSignature";

@Component({
  selector: 'page-guidanceResult',
  templateUrl: 'guidanceResult.html'
})
export class guidanceResultPage {
   result1 : string ="全责";
   result2 : string ="无责";
  constructor(public navCtrl: NavController) {

  }

  //去签字页面
  guiResult(){
    this.navCtrl.push(uncontestedSignaturePage);
  }

}
