import { GroupItem } from '../models/group';

export const groupMock: GroupItem = {
  id: {
    S: 'y5kse1rcgh'
  },
  name: {
    S: 'Angular tutorials'
  },
  createdAt: {
    S: '1702738556'
  },
  createdBy: {
    S: 'Sam'
  }
};

export const myGroupMock: GroupItem = {
  id: {
    S: 'y5ksesdfgh'
  },
  name: {
    S: 'JavaScript'
  },
  createdAt: {
    S: '1702738620'
  },
  createdBy: {
    S: 'Jane'
  }
};

export const groupListMock: GroupItem[] = [
  groupMock,
  myGroupMock,
  groupMock,
  myGroupMock
];
