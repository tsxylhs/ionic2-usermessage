import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mine } from './mine';

import { About } from './about/about';

//导入照片编辑的页面
import { MineEditAvatar } from './mine-edit-avatar/mine-edit-avatar';
//导入用户信息界面
import { MineEdit } from './mine-edit/mine-edit';
//用户编辑信息详情页
import {MineEditModal } from './mine-edit-modal/mine-edit-modal';
//用户证件页面
import { MineCard } from './mine-card/mine-card';
//设置页面
import { Settings } from './settings/settings';

//反馈页面
import { FeedBack } from './feed-back/feed-back';
// UpdateLog

import { UpdateLog } from './update-log/update-log';

@NgModule({
  declarations: [
    Mine,About,MineEditAvatar,MineEdit,MineEditModal,MineCard,Settings,FeedBack,UpdateLog
  ],
  imports: [
    
    IonicPageModule.forChild(Mine),
  ],
  entryComponents:[About,MineEditAvatar,MineEdit,MineEditModal,MineCard,Settings,FeedBack,UpdateLog],
  exports: [
    About,
    MineEditAvatar,
    Mine,
    MineEditModal,
    MineEdit,
    MineCard,
    Settings,
    FeedBack,
    UpdateLog
  ]
})
export class MineModule {}
