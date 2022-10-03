import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../interfaces/user";
import {UsersService} from "../../../services/users.service";
import {emailValidator, passValidator, passwordValidator} from "../../validators/auth-validators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {


  public registrationForm!: FormGroup;



  constructor(
    private usersService: UsersService,
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.registrationForm.valueChanges.subscribe(() => {

    })
  }


  public registration(): void {
    if(this.registrationForm.valid) {
      const payload : User  = {
        username: this.registrationForm.get('username')?.value,
        email: this.registrationForm.get('email')?.value,
        password: this.registrationForm.get('password')?.value,
        confirmPassword: this.registrationForm.get('confirmPassword')?.value,
      }
      this.usersService.setInLocalStorage(payload);
      this.navigateToLoginPage();
    }
  }


  public navigateToLoginPage (): void {
    this.router.navigate(['/login']);
  }

  private initForm (): void {
    this.registrationForm = this.fb.group({
      username: new FormControl('',[Validators.required,]),
      email: new FormControl('',[Validators.required,Validators.pattern(emailValidator)], ),
      password:  new FormControl('',[Validators.required,Validators.pattern(passValidator)]),
      confirmPassword:  new FormControl('',[Validators.required]),
    },{validators: [passwordValidator]})
  }
}
