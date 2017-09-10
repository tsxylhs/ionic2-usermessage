import {Component} from '@angular/core';
import { NavController, ViewController, AlertController } from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import { LoginPage } from '../login';
import { HttpService } from '../../../providers/httpService';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  RegisterForm: any;
   checknumber:string;

  constructor(public NavController: NavController,
              private HttpService:HttpService,
              private viewCtrl: ViewController,
              private AlertController:AlertController,

              private formBuilder: FormBuilder) {
    this.RegisterForm = this.formBuilder.group({
      phone: [, [Validators.required, Validators.minLength(11), Validators.pattern('1[0-9]{10}')]],
      verificationCode: [, [Validators.required, Validators.minLength(6), Validators.bind(this.checknumber)]],
      Password: [, [Validators.required, Validators.minLength(6)]],
      //Password1:[, [this.RegisterForm.controls['Password']!=this.RegisterForm.controls['Password1'], Validators.required, Validators.minLength(6)]]
    });
  };

getTestCode(){}
pushNotificationChange(value){
  //HTTP请求
alert("已发送"+value.phone)
let user={
      phoneNumber:value.phone
   }
this.HttpService.post('messagecheck',user).subscribe(
  data=>{
     if(data.success===1){
      console.log(data);
this.checknumber=data.checknumber;
          console.log("拿到验证码了");
      }else{
        console.log('没有拿到');
       this.showAlert();
      }
    },
    error => {
      this.showAlert();
      console.log(error);
}

)
}
  register(value) {

  let user={
      PhoneNumber:value.phone,
      passWord:value.Password,
      Token:"flase"
   }
 this.HttpService.post('userregister',user).subscribe(
  data=>{
     if(data.success===1){
      console.log(data);

          console.log("我进来了");
        this.NavController.push(LoginPage);


      }else{
        console.log('注册失败');
       this.showAlert();
      }
    },
    error => {
      this.showAlert();
      console.log(error);
}
)


  }


  dismiss() {
    this.viewCtrl.dismiss();
  }
  showAlert() {
    let alert = this.AlertController.create({
      title: '网络请求超时',
      subTitle: '请再次检查你的网络配置',
      buttons: ['确定']
    });
    alert.present();
}

}
