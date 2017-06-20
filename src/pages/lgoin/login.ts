
import { RegisterPage } from './register/register';
import { FindPasswordPage } from './find-password/findPasswrod';
import {Injectable} from '@angular/core';
import { Component } from '@angular/core';

import {ModalController, AlertController} from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpService } from '../../providers/httpService';


import { LoginStatusService } from '../../providers/login-statusService';
import { HomePage } from '../home/home';
import { Helper } from '../../providers/jiguang-helper';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
@Injectable()
export class LoginPage {
  loginForm:FormGroup;
  username:any;
  password:any;
  constructor(public loginStatusService:LoginStatusService, public Helper:Helper, public alertCtrl: AlertController,public modalController: ModalController,public navCtrl: NavController, private formBuilder:FormBuilder,public httpService: HttpService) {
   this.loginForm=formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]

   })
   this.username=this.loginForm.controls['username'];
   this.password=this.loginForm.controls['password'];
  }

login(value) {
  // return this.httpService.post('/app/bugRepair/login', user).map((res: Response) =>  res.json());
  let user={
    phoneNumber:value.username,
    password:value.password,
    Token:"flase"

  };
 this.httpService.post('userfind',user).subscribe(
      data => {
        console.log(data)
      if(data.success === 1){
          // 登录成功
     //     console.log(data.flag);
     //     console.log(data.result[0]._id);
            this.loginStatusService.setUser(data.result[0]);

            this.Helper.setAlias(''+data.result[0]._id);
            this.loginStatusService.LogonSucc();
            this.navCtrl.push(HomePage);


      }else{
        console.log('登录失败');

        this.loginStatusService.LogonFail();
       let alterscheck= this.alertCtrl.create(
          {
            title:'登陆失败',
            message:'请检查输入的手机号密码是否正确！',
            buttons:[
              {
                text:'确定'
              }
            ]

          }
        )
    alterscheck.present();

      }
    },
    error => {
      this.showAlert();
      console.log(error);
})






//this.httpService.post('http://127.0.0.1:3000/users',value);


  }
  findPassword(){
 this.modalController.create(FindPasswordPage).present();
  }



toRegister(){
  this.modalController.create(RegisterPage).present();
}

showAlert() {
    let alert = this.alertCtrl.create({
      title: '网络请求超时',
      subTitle: '请再次检查你的网络配置',
      buttons: ['确定']
    });
    alert.present();
}


getTestCode(){
}
}
