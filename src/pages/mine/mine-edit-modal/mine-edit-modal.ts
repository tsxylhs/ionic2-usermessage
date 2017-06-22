import { Mine } from './../mine';
import { LoginPage } from './../../lgoin/login';
import { HomePage } from './../../home/home';
import {Component} from '@angular/core';

//angular Form模块
import {FormBuilder} from '@angular/forms';
import { NavParams, ViewController, AlertController, NavController, ModalController } from 'ionic-angular';

//加载用户类
import { UserInfo } from '../../../model/UserInfo';
//导入验证类
import {Validators} from "../../../providers/Validators";
import { HttpService } from '../../../providers/httpService';

@Component({
  selector: 'page-mine-edit-modal',
  templateUrl: 'mine-edit-modal.html'
})


export class MineEditModal {
    userInfo: UserInfo;
    userForm: any;
    /**
     * 验证信息
     */
    verifyMessages = {
    'userName': {
        'errorMsg': '',
        'required': '用户名为必填项',
        'minlength': '姓名最少2个字符',
        'chinese': '姓名必须是中文'
    },
    'phone': {
        'errorMsg': '',
        'required': '手机号码为必填项',
        'phone': '请输入正确的手机号码'
    },
    'email': {
        'errorMsg': '',
        'required': '电子邮箱为必填项',
        'email': '请输入正确的邮箱地址'
    },
    'nickName':{
        'errorMsg':'',
        'required':'请输入昵称',
        'maxlength':'昵称最长为10个字符'
    }
    };


/**
 *
 * @param params navctrl参数管理
 * @param viewCtrl 视图控制
 * @param formBuilder  表单构建器
 */
  constructor(
     public ModalController:ModalController,
    public AlertController:AlertController,
    public NavController: NavController,
    private params: NavParams,
                 public HttpService:HttpService,
              private viewCtrl: ViewController,
              private formBuilder: FormBuilder) {

    this.userInfo = params.get('userInfo');
    /*
    *构造视图
    */
    this.userForm = this.formBuilder.group({
      userName: [this.userInfo.userName, [Validators.required, Validators.minLength(2), Validators.chinese]],
      nickName: [this.userInfo.nickName,[Validators.required]],
       userAddress: [this.userInfo.userAddress,[Validators.required]],
    //  phone: [this.userInfo.phone, [Validators.required, Validators.phone]],
      email: [this.userInfo.email, [Validators.required, Validators.email]],
      idCard:[this.userInfo.idCard]
  });

    /**
     * 动态验证用户的数据是否正确
     */
    this.userForm.valueChanges
      .subscribe(data => {
        const verifyMessages = this.verifyMessages;
        for (const field in verifyMessages) {

          verifyMessages[field].errorMsg = '';

          const control = this.userForm.get(field);
          if (control && control.dirty && !control.valid) {
            const messages = verifyMessages[field];
            for (const key in control.errors) {
              messages[key] && (verifyMessages[field].errorMsg += messages[key] + ' ');
            }
          }


        }

      });

  }

/**
 * 用户的信息改变将提交给服务器进行数据的更新，否则则是一次伪提交
 */
  onSubmit(value) {

  let user={
    _id:this.userInfo.id,
    userAddress:value.userAddress,
    idCard:value.idCard,
    email:value.email,
    nickName:value.nickName,
    userName:value.userName,
   // PhoneNumber:value.phone,
    passWord:value.Password,
    Token:"flase"
   }
 this.HttpService.post('updateUsers',user).subscribe(
  data=>{
     if(data.success===1){
        this.loginALert();
      }else{
        console.log('修改失败');
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
      //模态框消失
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
loginALert(){
  let alert=this.AlertController.create({
    title:'修改成功',
    subTitle:'请重新登录',
    buttons:[{
      text:'确认',
      handler:()=>{
        this.NavController.push(LoginPage);
      }
    },
   {
       text:'取消',
       handler:()=>{
         this.NavController.push(Mine)
       }

   }]


  })
   alert.present();
}
}
