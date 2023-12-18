import { ConversationItem } from '../models/conversation';

export const messageMock: ConversationItem = {
  authorID: {
    S: 'Jane'
  },
  message: {
    S: 'Hello! How are you doing today?'
  },
  createdAt: {
    S: '2023/10/17 13:54'
  }
};

export const messageOtherMock: ConversationItem = {
  authorID: {
    S: 'Sam'
  },
  message: {
    S: 'Fine, thank you! And you?'
  },
  createdAt: {
    S: '2023/10/17 14:54'
  }
};

export const largeMessageTestMock: ConversationItem = {
  authorID: {
    S: 'Sam'
  },
  message: {
    // eslint-disable-next-line max-len
    S: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse lacinia metus a eros lacinia ultrices. Vivamus dignissim est ut aliquam consequat. Integer dapibus vitae eros in consectetur. Nulla pretium nec lectus eget tincidunt. Morbi tincidunt, libero suscipit rutrum porta, risus massa condimentum tellus, eu pulvinar dui ex non leo.'
  },
  createdAt: {
    S: '2023/10/17 14:54'
  }
};

export const messageListMock: ConversationItem[] = [
  messageMock,
  messageOtherMock,
  messageMock,
  messageOtherMock,
  messageMock,
  largeMessageTestMock
];
