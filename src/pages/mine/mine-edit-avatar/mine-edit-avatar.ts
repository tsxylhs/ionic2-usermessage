import { Component } from '@angular/core';
import { NavController ,ViewController ,NavParams} from 'ionic-angular';
import { NativeService } from '../../../providers/NativeService';//加载本地服务

@Component({
  selector: 'page-mine-edit-avatar',
  templateUrl: 'mine-edit-avatar.html'
})
/**
 * 照片编辑
 */
export class MineEditAvatar {
  /**
   * @param isChange = true 上传数据库
   * @param isChange = false 不上传
   */
  isChange: boolean = false;//头像是否改变标识

  avatarPath: string;
  imageBase64: string;
  constructor(
    private navCtrl: NavController,
    private viewCtrl:ViewController,
    private navParams:NavParams,
    private nativeService:NativeService
    ) {
    this.avatarPath = navParams.get('avatarPath');
  }

//关闭模态框
  dismiss(){
    this.viewCtrl.dismiss();
  }

/**
 * 调用本地摄像机
 * @param type 用户的选择 1 直接拍照 ！1 用户从手机相册中选择
 */

//start1
  getPicture(type) {//1拍照,0从图库选择
    let options = {
      targetWidth: 256,
      targetHeight: 256
    };
    
    if (type == 1) {
      this.nativeService.getPictureByCamera(options).then(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });

    }
    //从相册中选 
    else {
      this.nativeService.getPictureByPhotoLibrary({}).then(imageBase64 => {
        this.getPictureSuccess(imageBase64);
      });
    }
  }

  private getPictureSuccess(imageBase64) {
    this.isChange = true;
    this.imageBase64 = <string>imageBase64;
    this.avatarPath = 'data:image/jpg;base64,' + imageBase64;
  }
  //end1



}
