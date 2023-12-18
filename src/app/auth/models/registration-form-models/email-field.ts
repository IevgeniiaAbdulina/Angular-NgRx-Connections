import { FormField } from '../form-field-model';

export class Email implements FormField {
  name = 'email';
  type = 'email';
  placeholder = 'email@emeil.com';
  label = 'Email';
  controlName = 'email';
  errors = new Map([
    ['required', 'Please enter an email.'],
    ['email', 'The email is invalid.']
  ]);
  errorKeys: string[];

  constructor() {
    this.errorKeys = [...this.errors.keys()];
  }
}
