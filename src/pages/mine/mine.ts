import { LoginStatusService } from './../../providers/login-statusService';
import { Component } from '@angular/core';
import { Platform,IonicPage, NavController, NavParams , ModalController,AlertController} from 'ionic-angular';

//关于页面
import { About } from './about/about';
//用户实体类
import { UserInfo } from '../../model/UserInfo';
//导入常量类中的一个常量
//import {DEFAULT_AVATAR} from "../../providers/Constants";

import {MineEditAvatar} from './mine-edit-avatar/mine-edit-avatar';

import { MineEdit } from './mine-edit/mine-edit';

import { MineCard } from './mine-card/mine-card';
//导入登录页面
//import { Login } from '../login/login';

import {Settings} from './settings/settings';
import { LoginPage } from '../lgoin/login';

/**
 * Generated class for the Mine page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class Mine {
userInfo:UserInfo;
avatarPath:string;
  constructor(
              public LoginStatusService:LoginStatusService,
              public navCtrl: NavController,
              public navParams: NavParams,
              private modalCtrl:ModalController,
              private alertCtrl:AlertController,
              private platform : Platform) {
    //模拟的数据
    this.userInfo = new UserInfo();
    this.userInfo.id = navParams.get('_id')

    this.userInfo.email =navParams.get('email');;
    this.userInfo.nickName = navParams.get('nickName');;
    this.userInfo.phone = navParams.get('phoneNumber');
    this.userInfo.description = "好雨知时节，当春乃发生";
    this.userInfo.userName = navParams.get('userName');;
    this.userInfo.idCard = navParams.get('idCard');;
    this.userInfo.userAddress=navParams.get('userAddress');
    this.userInfo.avatar=navParams.get('avatar');
    this.avatarPath=navParams.get('avatar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Mine');
  }

  about(){
    this.navCtrl.push(About);

  }

/**
 * 打开用户信息页面
 */
  edit(){
    this.navCtrl.push(MineEdit, {'userInfo': this.userInfo, 'avatarPath': this.avatarPath});
  }

  /**
   * 用户点击照片弹出模态框
   * @param event
   */
  viewAvatar($event) {
    $event.stopPropagation();
    let modal = this.modalCtrl.create(MineEditAvatar, {
      'userInfo': this.userInfo,
      'avatarPath': this.avatarPath
    });
    modal.present();
    modal.onDidDismiss(data => {
      data && (this.avatarPath = data.avatar)
    });
}

/**
 * 打开用户证件页面
 *
 */
mineCard(){
  this.navCtrl.push(MineCard);
}

/**
 * 跳转到设置页面
 */
toSettings(){
  let modal = this.modalCtrl.create(Settings);
  modal.present();
}

/**
 * 接下来是重新登录功能
 * 需要弹出确定窗口  用户点击确定后会跳转到login页面
 */

  loginOut() {
    this.alertCtrl.create({
      title: '确认重新登录？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
            let modal = this.modalCtrl.create(LoginPage);
            modal.present();
            modal.onDidDismiss(userInfo => {
              if (userInfo) {
                this.userInfo = userInfo;
                userInfo.avatar && (this.avatarPath = userInfo.avatar);
              }
            });
          }
        }
      ]
    }).present();
  }

/**
 * exit software
 * 退出软件
 */

  exitSoftware() {
    this.alertCtrl.create({
      title: '确认退出软件？',
      buttons: [{text: '取消'},
        {
          text: '确定',
          handler: () => {
             this.LoginStatusService.Exit();

            this.platform.exitApp();
          }
        }
      ]
    }).present();
  }















}
