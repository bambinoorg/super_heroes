import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IronmanComponent } from './ironman.component';



@NgModule({
    declarations: [
        IronmanComponent
    ],
    exports: [
        IronmanComponent
    ],
    imports: [
        CommonModule
    ]
})
export class IronmanModule { }
