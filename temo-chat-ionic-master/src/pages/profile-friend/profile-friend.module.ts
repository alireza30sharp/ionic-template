import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { ProfileFriendPage } from './profile-friend';
import { CommonModule } from '@angular/common';
import { IonicPageModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileFriendPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfileFriendPageModule {}
