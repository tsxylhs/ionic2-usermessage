/**
 * Created by yanxiaojun617@163.com on 12-27.
 */
import {Injectable} from '@angular/core';
import {ToastController, LoadingController, Platform, Loading, AlertController} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

declare var LocationPlugin;
declare var AMapNavigation;
declare var cordova: any;

@Injectable()
export class NativeService {
  private loading: Loading;
  private loadingIsOpen: boolean = false;

  constructor(private platform: Platform,
              private toastCtrl: ToastController,
              private alertCtrl: AlertController,
              private statusBar: StatusBar,
              private splashScreen: SplashScreen,

              private loadingCtrl: LoadingController) {
  }

  warn(info): void {
    console.log('%cNativeService/' + info, 'color:#e8c406');
  }


  /**
   * 通过浏览器打开url
   */

  /**
   * 检查app是否需要升级
   */


  /**
   * 下载安装app
   */

  /**
   * 是否真机环境
   * @return {boolean}
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   * @return {boolean}
   */
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   * @return {boolean}
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */


  /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content: string = ''): void {
    if (!this.loadingIsOpen) {
      this.loadingIsOpen = true;
      this.loading = this.loadingCtrl.create({
        content: content
      });
      this.loading.present();
      setTimeout(() => {//最长显示10秒
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
      }, 10000);
    }
  };

  /**
   * 关闭loading
   */
  hideLoading(): void {
    this.loadingIsOpen && this.loading.dismiss();
    this.loadingIsOpen = false;
  };

  /**
   * 使用cordova-plugin-camera获取照片
   * @param options
   * @returns {Promise<string>}
   */


  /**
   * 通过拍照获取照片
   * @param options
   * @return {Promise<string>}
   */

  /**
   * 通过图库获取照片
   * @param options
   * @return {Promise<string>}
   */



  /**
   * 通过图库选择多图
   * @param options
   * @return {Promise<T>}
   */

  /**
   * 根据图片绝对路径转化为base64字符串
   * @param url 绝对路径
   * @param callback 回调函数
   */


  /**
   * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
   */


  /**
   * 判断是否有网络
   * @returns {boolean}
   */


  /**
   * 获得app版本号,如0.01
   * @description  对应/config.xml中version的值
   * @returns {Promise<string>}
   */


  /**
   * 获得app name,如ionic2_tabs
   * @description  对应/config.xml中name的值
   * @returns {Promise<string>}
   */


  /**
   * 获得app包名/id,如com.kit.ionic2tabs
   * @description  对应/config.xml中id的值
   * @returns {Promise<string>}
   */


  /**
   * 使用默认状态栏
   */
  statusBarStyleDefault() {
    this.statusBar.styleDefault();
  }

  /**
   * 隐藏启动页面
   */
  splashScreenHide() {
    this.splashScreen.hide();
  }

  /**
   * 调用最小化app插件


  /**
   * 获得用户当前坐标
   * @return {Promise<Position>}
   */
  getUserLocation(): Promise<Position> {
    return new Promise((resolve) => {
      if (this.isMobile()) {
        LocationPlugin.getLocation(data => {
          resolve({'lng': data.longitude, 'lat': data.latitude});
        }, msg => {
          alert(msg.indexOf('缺少定位权限') == -1 ? ('错误消息：' + msg) : '缺少定位权限，请在手机设置中开启');
          this.warn('getUserLocation:' + msg);
        });
      } else {
        this.warn('getUserLocation:非手机环境,即测试环境返回固定坐标');
        resolve({'lng': 113.350912, 'lat': 23.119495});
      }
    });
  }

  /**
   * 地图导航
   * @param startPoint 开始坐标
   * @param endPoint 结束坐标
   * @param type 0实时导航,1模拟导航,默认为模拟导航
   * @return {Promise<string>}
   */


}
