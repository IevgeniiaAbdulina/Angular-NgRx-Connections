import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversationListComponent } from './conversation-list/conversation-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: ':conversationID', component: ConversationListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConversationRoutingModule {}
