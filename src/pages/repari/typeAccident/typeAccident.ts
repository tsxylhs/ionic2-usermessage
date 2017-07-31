import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExplainPage } from "../../explain/explain";
import { AlertController } from "ionic-angular";
import { prompt2Page } from "../prompt2/prompt2";
import { DEFAULT_AVATAR7 } from "../../../providers/Constants";
import { DEFAULT_AVATAR8 } from "../../../providers/Constants";
import { Camera2Page } from "../camera2/camera2";

@Component({
  selector: 'page-typeAccident',
  templateUrl: 'typeAccident.html'
})
export class typeAccidentPage {
  avatarPath7:string = DEFAULT_AVATAR7;
  avatarPath8:string = DEFAULT_AVATAR8;

  constructor(
      public navCtrl: NavController,
      public alertCtrl : AlertController
            ) {

  }
  //
  accType(type){
    if(type == 1){
      this.navCtrl.push(prompt2Page);//多车事故
    }else{
        this.navCtrl.push(Camera2Page);//单车事故
    }
  }

  doExplain(){
    this.navCtrl.push(ExplainPage);
  }
}
