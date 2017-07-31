import { HomePage } from './../../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'oneCarOK-form',
  templateUrl: './oneCarOK.html'
})

export class oneCarOKPage {
  constructor(public navCtrl: NavController,
            public actionSheetCtrl:ActionSheetController) {

  }


  tohome(){
    this.navCtrl.push(HomePage);
  }
}
