import {Injectable} from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage} from '@ionic/storage';

/*
  Generated class for the LogonStatusService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LoginStatusService {

  constructor(public storage : Storage) {}

  /**
   * logon = true // 当前处于登录状态，不需要重新输入用户名密码。
   * logon = false // 当前处于非登录状态，需要输入用户名密码。
   * firstIn = null and true // 首次进入应用
   * firstIn = false // 并非首次进入
   */
  public setUser(user) {
    return this
      .storage
      .set("userinfo", user)
  }

  public getUser() {
    return this
      .storage
      .get("userinfo")
  }

  public getUserID() {
    return this
      .storage
      .get("userinfo")
      .then((user) => user._id)
  }

  public getFirstInStatus() {
    return this
      .storage
      .get("firstIn")
  }

  public getLogonStatus() {
    return this
      .storage
      .get("logon")
  }

  public LogonSucc() {
    this
      .storage
      .set("logon", true);
    this
      .storage
      .set("firstIn", false);
  }

  public LogonFail() {
    this
      .storage
      .set("logon", false);
    this
      .storage
      .set("firstIn", false);
  }

  public Exit() {
      this
      .storage
      .set("logon", false);
      this
      .storage
      .set("userinfo", null);
      this
      .storage
      .set("firstIn",true)
  }
}
