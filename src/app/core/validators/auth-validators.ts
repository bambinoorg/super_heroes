import {FormGroup, PatternValidator, ValidationErrors, Validators} from "@angular/forms";

export  function passwordValidator( group: FormGroup) : ValidationErrors | null {

  if(group.get('password')?.value && group.get('confirmPassword')?.value) {
    if(group.get('password')?.value === group.get('confirmPassword')?.value) {
      return null
    }
    return {passErr: 'Password not same*' };
  }
  return null;
}

export const emailValidator: RegExp = (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
export const passValidator: RegExp  = (/(?=.*[0-9])(?=.*[,!@#$%^.&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g)
