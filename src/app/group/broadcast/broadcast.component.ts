import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ConversationItem } from 'src/app/conversation/models/conversation';
import { userID } from 'src/app/shared/mocks/headers.mocks';
import { AppState } from 'src/app/store/appState.interface';
import {
  getGroupConversationData,
  sendMessageToGroup
} from 'src/app/store/group/group.actions';
import { selectGroupConversation } from 'src/app/store/group/group.selectors';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.scss']
})
export class BroadcastComponent {
  newMessageForm: FormGroup;
  createdByUser = userID;
  broadcastID: string;

  conversation: Observable<ConversationItem[]>;

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.broadcastID = this.router.url.substring(7);

    this.newMessageForm = new FormGroup({
      text: new FormControl('')
    });

    this.conversation = this.store.select(selectGroupConversation);
    this.store.dispatch(
      getGroupConversationData({ groupID: this.broadcastID })
    );
  }

  deleteHandler(): void {
    console.log('Delete current broadcast', this.broadcastID);
  }

  sendMessageHandler(): void {
    const textValue: string = this.newMessageForm.value.text;
    if (!textValue) return;

    this.store.dispatch(
      sendMessageToGroup({ groupID: this.broadcastID, message: textValue })
    );

    this.newMessageForm.reset();
  }

  updateHandler(): void {
    this.store.dispatch(
      getGroupConversationData({ groupID: this.broadcastID })
    );
  }
}
