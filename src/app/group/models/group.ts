import { ConversationItem } from 'src/app/conversation/models/conversation';
import { ResponseSuccess } from 'src/app/shared/models/response-interface';

export interface GroupItem {
  id: {
    S: string; // group id
  };
  name: {
    S: string; // group name
  };
  createdAt: {
    S: string; // unix timestamp when group was created
  };
  createdBy: {
    S: string; // user id who created this group
  };
}

export interface GroupResponse extends ResponseSuccess {
  Items: GroupItem[];
}

export interface GroupPostRequest {
  name: string; // new group name
}

export interface GroupPostResponse {
  groupID: string;
}

export interface GroupDeleteRequest {
  groupID: string; // unique group identifier
}

export interface MessagesOfProvidedGroupRequest {
  groupID: string; // unique group identifier
  since: number; // (Optional) unix timestamp in milliseconds
}

export interface MessagesOfProvidedGroup extends ResponseSuccess {
  Items: ConversationItem[];
}

export interface SendsNewMessageIntoGroupRequest {
  groupID: string; // group identifier
  message: string; // personal message text
}
