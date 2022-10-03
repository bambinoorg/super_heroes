import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteModalComponent } from './delete-modal.component';
import { MatButtonModule } from '@angular/material/button'
import { ButtonModule } from './../button/button.module';




@NgModule({
  declarations: [
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    ButtonModule
  ],
  exports: [
    DeleteModalComponent
  ]
})
export class DeleteModalModule { }
