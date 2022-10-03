import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        InputComponent
    ],
    exports: [
        InputComponent
    ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class InputModule { }
