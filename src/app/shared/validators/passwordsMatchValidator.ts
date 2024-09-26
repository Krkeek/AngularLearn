import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export const passwordsMatchValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const passwordConfirmation = control.get('passwordConfirmation');

    if (!password || !passwordConfirmation) {
      return null;
    }

    return password.value === passwordConfirmation.value ? null : { passwordsMismatch: true };
  };
}
