import { GroupsState, UsersState } from './state.models';

export interface AppState {
  groups: GroupsState;
  users: UsersState;
}
