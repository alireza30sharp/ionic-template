import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MyProfilePage } from './my-profile';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyProfilePage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // IonicPageModule.forChild(MyProfilePage),
    TranslateModule.forChild(),
    IonicModule,
  ],
})
export class MyProfilePageModule {}
