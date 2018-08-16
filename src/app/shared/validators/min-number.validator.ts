import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
export const minNumberValidator = (min: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {
    const v: number = +control.value;
    return v >= +min ? null : {actualValue: v, requiredValue: +min, min: true};
  };
};
