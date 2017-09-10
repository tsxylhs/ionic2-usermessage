
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { SignaturePadPage } from "../signaturePad/signaturePad";
import { agreementOfLiabilityPage } from "../agreementOfLiability/agreementOfLiability";
@Component({
  selector: 'page-uncontestedSignature',
  templateUrl: 'uncontestedSignature.html'
})
export class uncontestedSignaturePage1 {
  constructor(public navCtrl: NavController) {

  }

  toAOfL(){
    this.navCtrl.push(agreementOfLiabilityPage);
  }
}
