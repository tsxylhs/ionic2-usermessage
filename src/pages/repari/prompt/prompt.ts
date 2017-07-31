import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { ExplainPage } from "../../explain/explain";
import {typeAccidentPage} from "../typeAccident/typeAccident"
//import { typeAccidentPage } from "../typeAccident/typeAccident";
@Component({
  selector: 'page-prompt',
  templateUrl: 'prompt.html'
})
export class promptPage {

  constructor(public navCtrl: NavController) {

  }
  //跳转到说明页面
  doExplain(){
  //  this.navCtrl.push(ExplainPage);
  }
  //开始处理
  toStart(){
this.navCtrl.push(typeAccidentPage);
  }
}
