
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { uncontestedSignaturePage1 } from '../uncontestedSignature1/uncontestedSignature';
@Component({
  selector: 'page-uncontestedSignature',
  templateUrl: 'uncontestedSignature.html'
})
export class uncontestedSignaturePage {
  constructor(public navCtrl: NavController) {

  }

  toAOfL(){
    this.navCtrl.push(uncontestedSignaturePage1);
  }
}
