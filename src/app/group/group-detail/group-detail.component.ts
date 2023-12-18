import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { userID } from 'src/app/shared/mocks/headers.mocks';
import { deleteGroupAction } from 'src/app/store/group/group.actions';

import { GroupItem } from '../models/group';

@Component({
  selector: 'app-group-detail',
  templateUrl: './group-detail.component.html',
  styleUrls: ['./group-detail.component.scss']
})
export class GroupDetailComponent {
  @Input() group!: GroupItem;
  createdByUser = userID;

  constructor(private store: Store) {}

  deleteGroupHandler(id: string): void {
    this.store.dispatch(deleteGroupAction({ groupID: id }));
  }
}
