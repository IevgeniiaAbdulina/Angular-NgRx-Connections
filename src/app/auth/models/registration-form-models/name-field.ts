import { FormField } from '../form-field-model';

export class Name implements FormField {
  name = 'first-name';
  type = 'text';
  placeholder = 'User name';
  label = 'First name';
  controlName = 'name';
  errors = new Map([
    ['required', 'Please enter a first name.'],
    ['maxlength', 'The first name is too long.'],
    ['requireLettersSpaces', 'Allowed only letters (any language) or spaces.']
  ]);
  errorKeys: string[];

  constructor() {
    this.errorKeys = [...this.errors.keys()];
  }
}
