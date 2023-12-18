import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { messageListMock } from '../mocks/conversations-mock';
import { ConversationItem } from '../models/conversation';

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements AfterViewInit {
  conversation: ConversationItem[] = [];
  newMessageForm: FormGroup;

  constructor() {
    // todo: store.select(conversation)
    this.conversation = messageListMock;

    this.newMessageForm = new FormGroup({
      text: new FormControl('')
    });
  }

  ngAfterViewInit(): void {
    this.forceScrollDown();
  }

  forceScrollDown(): void {
    console.log('push to auto scroll after new message');
  }

  // All received message data should be organized in a way
  // that prevents loading of old(previous) messages again if user navigates between pages
  // and returns back to the channel until browser is reloaded.

  sendMessageHandler(): void {
    const textValue: string = this.newMessageForm.value.text;
    if (!textValue) return;

    console.log('Message has been sent', textValue);

    const newMessage = {
      authorID: {
        S: 'Jane'
      },
      message: {
        S: textValue
      },
      createdAt: {
        S: new Date().toUTCString()
      }
    };

    this.conversation.push(newMessage);

    this.newMessageForm.reset();
  }

  deleteHandler(): void {
    console.log('Delete conversation handler');
    // Clicking on this button the conversation will be deleted and
    // the partner will not be able to sent messages until
    // conversation is created again. All messages are being deleted.
  }

  updateHandler(): void {
    console.log('Update conversation messages list');
  }
}
