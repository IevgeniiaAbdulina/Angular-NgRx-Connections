import { FormField } from '../form-field-model';

export class Password implements FormField {
  name = 'password';
  type = 'password';
  placeholder = '********';
  label = 'Password';
  controlName = 'password';
  errors = new Map([
    ['required', 'Please enter a password.'],
    [
      'minlength',
      'A strong password should have at least 8 characters length.'
    ],
    ['requireUppercase', 'It should contain at least one capital letter.'],
    ['requireDigit', 'It should contain at least one digit.'],
    [
      'specialCharacter',
      'It should contain at least one special character (e.g., !, @, #, $).'
    ]
  ]);
  errorKeys: string[];

  constructor() {
    this.errorKeys = [...this.errors.keys()];
  }
}
