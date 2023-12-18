import { ResponseSuccess } from 'src/app/shared/models/response-interface';

export interface ConversationRequestQuery {
  conversationID: string; // unique conversation identifier
  since: number; // (Optional) unix timestamp in milliseconds
}

export interface ConversationItem {
  authorID: {
    S: string; // id of the author of the message
  };
  message: {
    S: string; // message text
  };
  createdAt: {
    S: string; // unix timestamp when message was sent
  };
}

export interface ConversationResponse extends ResponseSuccess {
  Items: ConversationItem[];
}

export interface ConversationPostRequest {
  conversationID: string; // conversation identifier
  message: string; // personal message text
}

export interface ConversationDeleteRequestQuery {
  conversationID: string; // unique conversation identifier
}
