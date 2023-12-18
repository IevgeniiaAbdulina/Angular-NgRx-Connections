import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ButtonComponent } from '../button/button.component';

export interface SnackBar {
  message: string;
  action: string;
}

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, ButtonComponent]
})
export class SnackBarComponent {
  @Input() snackBarData!: SnackBar;

  constructor(private snackBar: MatSnackBar) {}

  dismissClicked() {
    this.snackBar.dismiss();
  }
}
