import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryTableComponent } from './history-table.component';
import { MatTableModule } from '@angular/material/table';
import { ButtonModule } from './../button/button.module';

@NgModule({
  declarations: [
    HistoryTableComponent
  ],
  exports: [
    HistoryTableComponent
  ],
  imports: [

  ButtonModule,
  CommonModule,
  MatTableModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class HistoryTableModule { }
