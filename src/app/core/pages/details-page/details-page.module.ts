import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderModule} from "../../components/ui/header/header.module";

const route: Routes = [ {
  path: '',
  component: DetailsPageComponent,
}]

@NgModule({
  declarations: [
    DetailsPageComponent
  ],
  imports: [
    RouterModule.forChild(route),
    CommonModule,
    HeaderModule
  ]
})
export class DetailsPageModule { }
