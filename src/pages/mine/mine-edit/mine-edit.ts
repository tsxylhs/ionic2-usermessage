
import {Component} from '@angular/core';
import {ModalController, NavParams} from 'ionic-angular';
//导入用户类
import {UserInfo} from '../../../model/UserInfo';
//导入编辑图片的类
import {MineEditAvatar} from '../mine-edit-avatar/mine-edit-avatar';

//导入用户编辑详情页
import { MineEditModal } from '../mine-edit-modal/mine-edit-modal';

@Component({
  selector: 'page-mine-edit',
  templateUrl: 'mine-edit.html'
})
export class MineEdit {
  userInfo: UserInfo;
  avatarPath: string;


  constructor(private modalCtrl: ModalController,
              private params: NavParams) {

    this.userInfo = params.get('userInfo');
  this.avatarPath= this.userInfo.avatar;

  }

  //打开照片编辑的模态框
   viewAvatar($event) {
        $event.stopPropagation();
        let modal = this.modalCtrl.create(MineEditAvatar, {avatarPath: this.userInfo.avatar});
        modal.present();
        modal.onDidDismiss(data => {
        data && (this.userInfo.avatar = data.avatarPath)
        });
  }

  /**
   * 打开用户可以注册的页面
   */
  openModal() {
    let modal = this.modalCtrl.create(MineEditModal, {'userInfo':this.userInfo});
    modal.present();
    modal.onDidDismiss(userInfo => {
      userInfo && (this.userInfo = userInfo)
    });
  }

}
