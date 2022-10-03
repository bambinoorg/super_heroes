import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageComponent } from './registration-page.component';
import {RouterModule, Routes} from "@angular/router";
import {IronmanModule} from "../../components/back-grounds/ironman/ironman.module";
import {InputModule} from "../../components/ui/input/input.module";
import {ButtonModule} from "../../components/ui/button/button.module";
import {ReactiveFormsModule} from "@angular/forms";
import {GetControlModule} from "../../../pipes/get-control/get-control.module";

const routes: Routes = [{
  path: '',
  component: RegistrationPageComponent,
}]

@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    IronmanModule,
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
    GetControlModule
  ]
})
export class RegistrationPageModule { }
