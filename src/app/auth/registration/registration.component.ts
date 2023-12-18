import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { RegistrationForm } from '../models/form-field-model';
import { Email } from '../models/registration-form-models/email-field';
import { Name } from '../models/registration-form-models/name-field';
import { Password } from '../models/registration-form-models/password-field';
import { FormControlService } from '../services/form-control.service';
import { FormFieldValidators } from '../validators/password-validators';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  formFields: RegistrationForm = {
    name: new Name(),
    email: new Email(),
    password: new Password()
  };

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(40),
          FormFieldValidators.patternValidator(/[\p{Letter}\p{Mark}\s]+/gu, {
            requireLettersSpaces: true
          })
        ]
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          FormFieldValidators.patternValidator(/(?=.*[A-Z])/, {
            requireUppercase: true
          }),
          FormFieldValidators.patternValidator(/(?=.*[0-9])/, {
            requireDigit: true
          }),
          FormFieldValidators.patternValidator(/(?=.*[$@#^!%*?&])/, {
            specialCharacter: true
          })
        ]
      ]
    });
  }

  validationCheck(control: AbstractControl): boolean | null {
    return FormControlService.validationCheck(control);
  }

  getControlName(name: string): AbstractControl | null {
    return FormControlService.getFormControl(this.registrationForm, name);
  }

  submitHandler(): void {
    const formValue: RegistrationForm = this.registrationForm.value;
    if (this.registrationForm.invalid) return;

    // todo:
    // dispatch the action to register a new user

    localStorage.setItem('user', JSON.stringify(formValue));
    this.router.navigate(['signin']);
  }
}
