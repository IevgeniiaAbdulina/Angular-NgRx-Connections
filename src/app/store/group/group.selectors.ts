import { createSelector } from '@ngrx/store';

import { AppState } from '../appState.interface';
import { GroupsState } from '../state.models';

export const selectGroupState = (state: AppState) => state.groups;

export const selectLoadingGroups = createSelector(
  selectGroupState,
  (state: GroupsState) => state.isLoading
);

export const selectGroupListData = createSelector(
  selectGroupState,
  (state: GroupsState) => state.groups
);

export const selectGroupList = createSelector(
  selectGroupState,
  (state: GroupsState) => state.groups
);

export const selectGroupError = createSelector(
  selectGroupState,
  (state: GroupsState) => state.error
);

export const selectGroupConversation = createSelector(
  selectGroupState,
  (state: GroupsState) => state.groupConversations
);
