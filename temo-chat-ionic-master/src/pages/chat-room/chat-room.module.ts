import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatRoomPage } from './chat-room';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChatRoomPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicPageModule.forChild(ChatRoomPage),
  ],
})
export class ChatRoomPageModule {}
