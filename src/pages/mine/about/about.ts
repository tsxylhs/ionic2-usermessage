import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
//import { APK_LOGO_AVATAR } from '../../../providers/Constants';

//反馈
import { FeedBack } from '../feed-back/feed-back';

import { UpdateLog } from '../update-log/update-log';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class About {

  private logoPath:string;

  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {
   // this.logoPath = APK_LOGO_AVATAR;
  }


  feedBack(){
    this.modalCtrl.create(FeedBack).present();
  }



  updateLog(){
    this.modalCtrl.create(UpdateLog).present();
  }


  dismiss(){
    this.navCtrl.pop();
  }





}
