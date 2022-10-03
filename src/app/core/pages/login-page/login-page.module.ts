import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {ButtonModule} from "../../components/ui/button/button.module";
import {IronmanModule} from "../../components/back-grounds/ironman/ironman.module";
import {InputModule} from "../../components/ui/input/input.module";
import {GetControlModule} from "../../../pipes/get-control/get-control.module";

const routes: Routes = [{
  path: '',
  component: LoginPageComponent,
}]

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
  RouterModule.forChild(routes),
    CommonModule,
    ButtonModule,
    IronmanModule,
    InputModule,
    GetControlModule,
  ]
})
export class LoginPageModule { }
