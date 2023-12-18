import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ButtonComponent } from './components/button/button.component';
import { ModalComponent } from './components/modal/modal.component';
import { SnackBarComponent } from './components/snack-bar/snack-bar.component';
import { UpdateTimerComponent } from './components/update-timer/update-timer.component';

const materialDesign = [
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatTooltipModule,
  MatIconModule,
  MatDividerModule,
  MatCardModule,
  MatDialogModule,
  MatSnackBarModule
];

const components = [ButtonComponent, UpdateTimerComponent, SnackBarComponent];

@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ...components,
    ...materialDesign
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ModalComponent,
    ...components,
    ...materialDesign
  ]
})
export class SharedModule {}
