import { UserItem } from '../models/user';

export const userMock: UserItem = {
  name: {
    S: 'Jane'
  },
  uid: {
    S: '123556'
  }
};

export const friendUserMock: UserItem = {
  name: {
    S: 'Sam'
  },
  uid: {
    S: 'sdfsdfg'
  }
};

export const userListMock: UserItem[] = [
  userMock,
  friendUserMock,
  userMock,
  friendUserMock
];
