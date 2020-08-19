import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ChatState, selectMessages } from 'src/app/store/reducers/chat.reducer';
import { Message } from 'src/app/models/message';
import { getMessages } from 'src/app/store/actions/chat.actions';
import { OAuthService } from 'angular-oauth2-oidc';
import { ApiService } from 'src/app/services/api.service';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent  {

  constructor(public chatStore: Store<ChatState>, private apiservice: ApiService) { }

  messages: Message[];
  msg: string;
  chat: Chat;
  message: Message;

  getIdentity() {
  }

  // ngOnInit() {
  //   this.chatStore.dispatch(getMessages());

  //   this.chatStore.pipe(select(selectMessages)).subscribe(
  //     data => {
  //        this.messages = data;
  //       });

  //   const claims = this.oauthService.getIdentityClaims();
  //   console.log(claims);
  //   }

    sendMessage() {

      // this.message = {
      //   message: '',
      //   senderId:
      // };

      this.chat = new Chat();
      this.chat.message = this.msg;
      this.chat.recieverId = 10,
      this.chat.senderId = 45;

      console.log(this.msg);

      this.apiservice.postMessages(this.chat).subscribe();
    }

}
