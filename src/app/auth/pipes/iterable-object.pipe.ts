import { Pipe, PipeTransform } from '@angular/core';

import { FormField } from '../models/form-field-model';

@Pipe({
  name: 'iterableObject'
})
export class IterableObjectPipe implements PipeTransform {
  transform(obj: object): FormField[] {
    return Object.values(obj);
  }
}
