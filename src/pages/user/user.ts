import { HomePage } from './../home/home';
import { NavController,NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { LoginStatusService } from '../../providers/login-statusService';

@Component({
  selector: 'user-about',
  templateUrl: 'user.html'
})
export class Userpage {
  updateForm :FormGroup;
 Phone:any;
 password:any;
 avatar:any;

  constructor(public navCtrl: NavController, public navprams:NavParams ,public FormBuilder:FormBuilder,public LoginStatusService:LoginStatusService) {
 this.updateForm=FormBuilder.group({
    Phone: ['', Validators.required]

   })


   this.avatar=navprams.get('avatar');
    this.Phone=navprams.get('phoneNumber');
    this.password=navprams.get('passWord')

  }

outsystem(){
  this.LoginStatusService.Exit();
  this.navCtrl.push(HomePage);
}
}
