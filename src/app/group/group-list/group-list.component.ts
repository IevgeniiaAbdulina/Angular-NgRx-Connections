import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar
} from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { SnackBar } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { AppState } from 'src/app/store/appState.interface';
import {
  createGroupAction,
  getGroupListData
} from 'src/app/store/group/group.actions';
import {
  selectGroupError,
  selectGroupList,
  selectLoadingGroups
} from 'src/app/store/group/group.selectors';

import { GroupItem } from '../models/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent {
  groups: Observable<GroupItem[]>;
  isLoading: Observable<boolean>;
  error: Observable<string | null>;

  snackBarData!: SnackBar;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private store: Store<AppState>
  ) {
    this.isLoading = this.store.select(selectLoadingGroups);
    this.error = this.store.select(selectGroupError);
    this.groups = this.store.select(selectGroupList);
    this.store.dispatch(getGroupListData());
  }

  newGroupHandler(): void {
    this.updateHandler();
    this.showSnackBar('Group created successfully', 'close');
  }

  showSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, action, {
      duration: 3 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((groupName: string) => {
      if (!groupName) return;

      this.store.dispatch(createGroupAction({ groupName }));
      this.newGroupHandler();
    });
  }

  updateHandler(): void {
    this.store.dispatch(getGroupListData());
  }
}
