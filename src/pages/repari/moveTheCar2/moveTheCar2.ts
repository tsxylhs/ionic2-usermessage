import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplainPage } from "../../explain/explain";
import { DEFAULT_TUOCHE } from "../../../providers/Constants";
import { fillMyInfoPage } from "../fillMyInfo/fillMyInfo";
@Component({
  selector: 'page-moveTheCar2',
  templateUrl: 'moveTheCar2.html'
})
export class moveTheCar2Page {
  movecar:string = DEFAULT_TUOCHE;
  constructor(public navCtrl: NavController) {

  }
  //跳转到说明页面
  doExplain(){
    this.navCtrl.push(ExplainPage);
  }
  //开始处理
    toFillMyInfo(){
      this.navCtrl.push(fillMyInfoPage);
    }
}
