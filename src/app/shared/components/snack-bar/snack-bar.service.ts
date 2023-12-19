import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  constructor(public snackBar: MatSnackBar) {}

  showSnackBar(
    message: string,
    action = 'close'
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, action, {
      duration: 8 * 1000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
