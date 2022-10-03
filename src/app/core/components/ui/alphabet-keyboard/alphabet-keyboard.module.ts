import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlphabetKeyboardComponent } from './alphabet-keyboard.component';
import {ReactiveFormsModule} from "@angular/forms";




@NgModule({
    declarations: [
        AlphabetKeyboardComponent
    ],
    exports: [
        AlphabetKeyboardComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

  ]
})
export class AlphabetKeyboardModule { }
