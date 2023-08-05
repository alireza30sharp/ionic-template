import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListFriendsPage } from './list-friends';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListFriendsPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicPageModule.forChild(ListFriendsPage),
  ],
})
export class ListFriendsPageModule {}
