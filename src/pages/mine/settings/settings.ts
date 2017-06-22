import { Component } from '@angular/core';
import { NavController,ViewController} from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {

  constructor(public navCtrl: NavController,private viewCtrl:ViewController) {

  }


/**
 * 关闭模态框
 */
dismiss(){
    this.viewCtrl.dismiss();
}



}
