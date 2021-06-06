import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'appErrors'
})
export class ErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors): string {
    if (value.required) {
      return 'This field is required';
    }
    if (value.maxLength) {
      return `This field must not be more than 
        ${value.maxlength.requiredLength} characters long`;
    }
    return JSON.stringify(value);
  }

}
