import { Component, Input } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConversationItem } from '../models/conversation';

@Component({
  selector: 'app-conversation-detail',
  templateUrl: './conversation-detail.component.html',
  styleUrls: ['./conversation-detail.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ConversationDetailComponent {
  @Input() messageItem: ConversationItem | undefined;
}
