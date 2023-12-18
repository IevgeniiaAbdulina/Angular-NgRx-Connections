import { createAction, props } from '@ngrx/store';
import { ConversationItem } from 'src/app/conversation/models/conversation';
import { GroupItem } from 'src/app/group/models/group';

export const getGroupList = createAction('[Group List] Get Grop List');

export const setLoadingGroups = createAction(
  '[Group List] Loading State',
  props<{ isLoading: boolean }>()
);

export const getGroupListData = createAction(
  '[Group List] Get Group List Data'
);

export const getGroupListSuccess = createAction(
  '[Group List] Get Group List Success',
  props<{ groupList: GroupItem[] }>()
);

export const getGroupListFailure = createAction(
  '[Group List] Get Group List Failure',
  props<{ error: string }>()
);

export const createGroupAction = createAction(
  '[Group] Create New Group',
  props<{ groupName: string }>()
);

export const deleteGroupAction = createAction(
  '[Group] Delete Group',
  props<{ groupID: string }>()
);

export const getGroupConversation = createAction(
  '[Group Conversation] Get Conversation Of Provided Group'
);

export const getGroupConversationData = createAction(
  '[Group Conversation] Get Conversation Data Of Provided Group',
  props<{ groupID: string }>()
);

export const getGroupConversationSuccess = createAction(
  '[Group Conversation] Get Conversation Of Provided Group Success',
  props<{ groupConversations: ConversationItem[] }>()
);

export const sendMessageToGroup = createAction(
  '[Group Conversation] Send Message To Group',
  props<{ groupID: string; message: string }>()
);
