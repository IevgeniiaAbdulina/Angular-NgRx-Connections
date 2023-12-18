import { createReducer, on } from '@ngrx/store';

import { GroupsState } from '../state.models';
import {
  getGroupConversationData,
  getGroupConversationSuccess,
  getGroupList,
  getGroupListData,
  getGroupListFailure,
  getGroupListSuccess,
  setLoadingGroups
} from './group.actions';

export const initialState: GroupsState = {
  isLoading: false,
  groups: [],
  groupConversations: [],
  error: null
};

export const GroupReducers = createReducer(
  initialState,

  on(
    setLoadingGroups,
    (state, { isLoading }): GroupsState => ({
      ...state,
      isLoading
    })
  ),

  on(
    getGroupListData,
    (state): GroupsState => ({
      ...state
    })
  ),

  on(
    getGroupList,
    (state): GroupsState => ({
      ...state,
      isLoading: true
    })
  ),

  on(
    getGroupListSuccess,
    (state, { groupList }): GroupsState => ({
      ...state,
      isLoading: false,
      groups: groupList
    })
  ),

  on(
    getGroupListFailure,
    (state, { error }): GroupsState => ({
      ...state,
      isLoading: false,
      error
    })
  ),

  on(
    getGroupConversationData,
    (state): GroupsState => ({
      ...state
    })
  ),

  on(
    getGroupConversationSuccess,
    (state, { groupConversations }): GroupsState => ({
      ...state,
      groupConversations
    })
  )
);
