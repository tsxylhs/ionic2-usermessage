import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';
import {FormBuilder, Validators} from '@angular/forms';
import {LoginPage} from '../login';

@Component({
  selector: 'page-find-password',
  templateUrl: 'findPassword.html'
})
export class FindPasswordPage {
  findPasswordForm: any;

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private formBuilder: FormBuilder) {
    this.findPasswordForm = this.formBuilder.group({
      phone: [, [Validators.required, Validators.minLength(11), Validators.pattern('1[0-9]{10}')]],
      verificationCode: [, [Validators.required, Validators.minLength(6), Validators.pattern('[0-9]{6}')]],
      newPassword: [, [Validators.required, Validators.minLength(6)]]
    });
  };

  confirm() {
    this.navCtrl.setRoot(LoginPage)
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
