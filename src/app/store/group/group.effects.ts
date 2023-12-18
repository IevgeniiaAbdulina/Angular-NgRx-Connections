import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from, map, switchMap } from 'rxjs';
import { GroupItem, MessagesOfProvidedGroup } from 'src/app/group/models/group';
import { GroupApiService } from 'src/app/group/services/group-api.service';

import {
  createGroupAction,
  deleteGroupAction,
  getGroupConversationData,
  getGroupConversationSuccess,
  getGroupListData,
  getGroupListSuccess,
  sendMessageToGroup
} from './group.actions';

@Injectable()
export class GroupEffects {
  constructor(
    private actions$: Actions,
    private groupApiService: GroupApiService
  ) {}

  /** Load the list of groups */
  loadGroups$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getGroupListData),
      switchMap(() => {
        return from(
          this.groupApiService.getGroupList().pipe(
            map((response: GroupItem[]) => {
              return getGroupListSuccess({ groupList: response });
            })
          )
        );
      })
    );
  });

  /** Creates new group with specific name.  */
  createGroup$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createGroupAction),
        switchMap(({ groupName }) => {
          return from(this.groupApiService.createNewGroup(groupName));
        })
      );
    },
    { dispatch: false }
  );

  /** Deletes group by owner. */
  deleteGroup$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(deleteGroupAction),
        switchMap(({ groupID }) => {
          return from(this.groupApiService.deleteGroupByOner(groupID));
        })
      );
    },
    { dispatch: false }
  );

  /** Retrieves messages of provided group. */
  loadMessagesOfGroup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getGroupConversationData),
      switchMap(({ groupID }) => {
        return from(this.groupApiService.getGroupMessages(groupID)).pipe(
          map((response: MessagesOfProvidedGroup) => {
            return getGroupConversationSuccess({
              groupConversations: response.Items
            });
          })
        );
      })
    );
  });

  /** Sends new message into the group channel. */
  sendMessage$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(sendMessageToGroup),
        switchMap(({ groupID, message }) => {
          return from(
            this.groupApiService.sendMessageIntoGroupChannel(groupID, message)
          );
        })
      );
    },
    { dispatch: false }
  );
}
