import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../../services/users.service";
import {loginUser} from "../../interfaces/user";
import {Route, Router} from "@angular/router";
import {emailValidator, passValidator} from "../../validators/auth-validators";
import { AuthServiceService } from './../../../services/auth-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, AfterViewInit {
  @ViewChild('userUndefined') userUndefined!: ElementRef<any>;
  public userNull: any
  public loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private authService : AuthServiceService
  ) { }

  ngOnInit(): void {
   this.loginForm = this.fb.group({
     email: new FormControl('', [Validators.required, Validators.pattern(emailValidator)]),
     password: new FormControl('',[Validators.required]),
   })
    this.usersService.getUsers;
  }

  ngAfterViewInit() {
    return this.userNull =this.userUndefined.nativeElement;
  }

  public loginUser (): void {
    if (this.loginForm.valid) {
      const payload: loginUser = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value,
      }
      const registeredUsers = this.usersService.getItemFromLocalStorage();
      const authUser = registeredUsers.find((user: any) =>
        user.email === payload.email &&
        user.password === payload.password)
        if (authUser) {
          this.usersService.setAuthUserInSession(authUser);
          this.authService.singIn();
          this.router.navigate(['/home']);
      } else  {
          this.userNull.classList.add('show');
        }
    }
  }
}
