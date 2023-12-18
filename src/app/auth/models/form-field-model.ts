export interface FormField {
  name: string;
  type: string;
  placeholder: string;
  label: string;
  controlName: string;
  errors: Map<string, string> | null;
  errorKeys: string[];
}

export interface LoginForm {
  email: FormField;
  password: FormField;
}

export interface RegistrationForm {
  name: FormField;
  email: FormField;
  password: FormField;
}
