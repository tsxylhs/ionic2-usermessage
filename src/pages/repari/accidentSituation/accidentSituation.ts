import { HttpService } from './../../../providers/httpService';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { fileTwoInfoPage } from "../fileTwoInfo/fileTwoInfo";
import { LoginStatusService } from '../../../providers/login-statusService';

@Component({
  selector: 'page-accidentSituation',
  templateUrl: 'accidentSituation.html'
})
export class accidentSituationPage {
  testRadioOpen: boolean;
  testRadioResult;//结果
  describe : string;//详细描述
  userID:string;
  constructor(public alerCtrl: AlertController,
             private HttpService:HttpService,
             public navCtrl : NavController,
             private LoginStatusService:LoginStatusService
             ) {

this.LoginStatusService.getUserID().then((value)=>{
           this.userID=value;
            })

             }

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
    console.log(this.describe+""+this.testRadioResult)
    let message={
           useID :this.userID,

           sglx:this.testRadioResult,
           sgsm:this.describe
    }
    this.navCtrl.push(fileTwoInfoPage);

 this.HttpService.post('miaoshu',message).subscribe(
      data => {
        if(data.success===1){
          this.navCtrl.push(fileTwoInfoPage);
        }
        else{
        alert("上传失败");
        }
 })

}
}

