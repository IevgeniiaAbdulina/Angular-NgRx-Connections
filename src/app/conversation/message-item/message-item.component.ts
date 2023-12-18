import { Component, Input } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { ConversationItem } from '../models/conversation';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class MessageItemComponent {
  @Input() messageItem: ConversationItem | undefined;
}
