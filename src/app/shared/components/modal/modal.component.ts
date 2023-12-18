import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface ModalData {
  name: string;
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  modalForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {
    this.modalForm = new FormGroup({
      name: new FormControl('', [
        Validators.maxLength(30),
        Validators.pattern(/^[a-zA-Z0-9\s]*$/)
      ])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
