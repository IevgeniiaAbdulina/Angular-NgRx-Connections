import { ResponseSuccess } from 'src/app/shared/models/response-interface';

export interface UserItem {
  name: {
    S: string; // user name
  };
  uid: {
    S: string; // user id
  };
}

export interface UserListResponse extends ResponseSuccess {
  Items: UserItem[];
}

export interface ConversationsOfCurrentUser {
  id: {
    S: string; // conversation id
  };
  companionID: {
    S: string; // conversation parter's id
  };
}

export interface ActiveConversations extends ResponseSuccess {
  Items: ConversationsOfCurrentUser[];
}

export interface ConversationWithUserPostRequest {
  companion: string; // user identifier
}

export interface ConversationWithUserResponse {
  conversationID: string;
}
