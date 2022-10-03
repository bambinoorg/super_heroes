import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './hero-card.component';
import { ButtonModule } from './../button/button.module';



@NgModule({
  declarations: [
    HeroCardComponent
  ],
  exports: [
    HeroCardComponent
  ],
  imports: [
  CommonModule,
    ButtonModule
  ]
})
export class HeroCardModule { }
