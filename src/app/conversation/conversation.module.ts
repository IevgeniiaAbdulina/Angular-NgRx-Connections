import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { ConversationDetailComponent } from './conversation-detail/conversation-detail.component';
import { ConversationListComponent } from './conversation-list/conversation-list.component';
import { ConversationRoutingModule } from './conversation-routing.module';
import { MessageItemComponent } from './message-item/message-item.component';

@NgModule({
  declarations: [ConversationListComponent],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    ConversationRoutingModule,
    SharedModule,
    MessageItemComponent,
    ConversationDetailComponent
  ],
  exports: [MessageItemComponent]
})
export class ConversationModule {}
