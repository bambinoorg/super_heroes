import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionModalComponent } from './session-modal.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    SessionModalComponent
  ],
  imports: [

  CommonModule,
    MatButtonModule
  ],
  exports: [
    SessionModalComponent
  ]
})
export class SessionModalModule { }
