import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { fileTwoInfoPage } from "../fileTwoInfo/fileTwoInfo";

@Component({
  selector: 'page-accidentSituation',
  templateUrl: 'accidentSituation.html'
})
export class accidentSituationPage {
  testRadioOpen: boolean;
  testRadioResult;//结果
  describe : string;//详细描述
  constructor(public alerCtrl: AlertController,
             public navCtrl : NavController) { }

  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('事故情形如下:');

    alert.addInput({
      type: 'radio',
      label: '追尾的',
      value: '追尾的',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: '逆行的',
      value: '逆行的'
    });

    alert.addInput({
      type: 'radio',
      label: '倒车的',
      value: '倒车的'
    });

    alert.addInput({
      type: 'radio',
      label: '遛车的',
      value: '遛车的'
    });

    alert.addInput({
      type: 'radio',
      label: '开关车门的',
      value: '开关车门的'
    });

    alert.addInput({
      type: 'radio',
      label: '违反交通信号的',
      value: '违反交通信号的'
    });

    alert.addInput({
      type: 'radio',
      label: '并行的',
      value: '并行的'
    });

    alert.addInput({
      type: 'radio',
      label: '全部责任的其他情况',
      value: '全部责任的其他情况'
    });

    alert.addInput({
      type: 'radio',
      label: '双方应负同等责任的',
      value: '双方应负同等责任的'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  tofileTwoInfoPage(){

    this.navCtrl.push(fileTwoInfoPage);
  }
}

