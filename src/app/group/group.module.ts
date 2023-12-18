import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ConversationDetailComponent } from '../conversation/conversation-detail/conversation-detail.component';
import { SharedModule } from '../shared/shared.module';
import { GroupEffects } from '../store/group/group.effects';
import { GroupReducers } from '../store/group/group.reducers';
import { BroadcastComponent } from './broadcast/broadcast.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupRoutingModule } from './group-routing.module';

@NgModule({
  declarations: [GroupListComponent, GroupDetailComponent, BroadcastComponent],
  imports: [
    CommonModule,
    SharedModule,
    GroupRoutingModule,
    ConversationDetailComponent,
    StoreModule.forFeature('groups', GroupReducers),
    EffectsModule.forFeature([GroupEffects])
  ],
  exports: [GroupListComponent]
})
export class GroupModule {}
