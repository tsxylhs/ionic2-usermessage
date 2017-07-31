import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { oneCarOKPage } from "../oneCarOK/oneCarOK";
@Component({
  selector: 'choseComp-form',
  templateUrl: './choseComp.html'
})

export class choseCompComponent {
  insuranceCompany:string[] = ['北京保险有限公司','平安出行保险公司','一路平安保险公司'];
  insc : string = this.insuranceCompany[0];
  constructor(public navCtrl: NavController,
            public actionSheetCtrl:ActionSheetController) {

  }

presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '修改保险公司:',
      buttons: [
        {
          text: this.insuranceCompany[0],
          role: this.insuranceCompany[0],
          handler: () => {
             this.insc = this.insuranceCompany[0];
          }
        },{
          text: this.insuranceCompany[1],
          role: this.insuranceCompany[1],
          handler: () => {
             this.insc = this.insuranceCompany[1];
          }
        },{
          text: this.insuranceCompany[2],
          role: this.insuranceCompany[2],
          handler: () => {
             this.insc = this.insuranceCompany[2];
          }
        },{
          text: this.insuranceCompany[3],
          role: this.insuranceCompany[3],
          handler: () => {
             this.insc = this.insuranceCompany[3];
          }
        }
      ]
    });
    actionSheet.present();
  }


  //
  toend(){
    this.navCtrl.push(oneCarOKPage);
  }
}
