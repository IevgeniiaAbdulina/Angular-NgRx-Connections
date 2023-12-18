import { ConversationItem } from '../conversation/models/conversation';
import { GroupItem } from '../group/models/group';
import { UserItem } from '../users/models/user';

export interface GroupsState {
  isLoading: boolean;
  groups: GroupItem[];
  groupConversations: ConversationItem[];
  error: string | null;
}

export interface UsersState {
  isLoading: boolean;
  users: UserItem[];
  userConversations: ConversationItem[];
  error: string | null;
}
