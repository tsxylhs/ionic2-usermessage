import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplainPage } from "../../explain/explain";
import { DEFAULT_TUOCHE } from "../../../providers/Constants";
import { accidentSituationPage } from "../accidentSituation/accidentSituation";
@Component({
  selector: 'page-moveTheCar',
  templateUrl: 'moveTheCar.html'
})
export class moveTheCarPage {
  movecar:string = DEFAULT_TUOCHE;
  constructor(public navCtrl: NavController) {

  }
  //跳转到说明页面
  doExplain(){
    this.navCtrl.push(ExplainPage);
  }
  //开始处理
  toAccidentSituation(){
   this.navCtrl.push(accidentSituationPage);
  }
}
