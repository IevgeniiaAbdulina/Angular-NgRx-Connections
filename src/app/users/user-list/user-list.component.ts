import { Component } from '@angular/core';
import { messageListMock } from 'src/app/conversation/mocks/conversations-mock';
import { ConversationItem } from 'src/app/conversation/models/conversation';

import { userListMock } from '../mocks/user.mocks';
import { UserItem } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  userList: UserItem[];
  conversationsList: ConversationItem[];

  constructor() {
    this.userList = userListMock;
    this.conversationsList = messageListMock;
  }

  updateHandler() {
    console.log(
      'Update button refreshes the people list by sending http-request and renders obtained list.'
    );

    this.userList = [
      ...this.userList,
      { name: { S: 'Poul' }, uid: { S: 'adfgadfg' } }
    ];
  }
}
