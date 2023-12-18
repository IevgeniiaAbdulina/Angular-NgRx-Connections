import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormControlService {
  public static validationCheck(control: AbstractControl): boolean | null {
    return control.invalid && (control.dirty || control.touched);
  }

  public static getFormControl(
    form: FormGroup,
    control: string
  ): AbstractControl | null {
    return form.get(control) ?? null;
  }
}
