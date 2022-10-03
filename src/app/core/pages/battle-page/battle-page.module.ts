import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BattlePageComponent } from './battle-page.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderModule } from './../../components/ui/header/header.module';
import { ButtonModule } from '../../components/ui/button/button.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HeroCardModule } from './../../components/ui/hero-card/hero-card.module';
import { SessionModalModule } from './../../components/ui/session-modal/session-modal.module';

const routes: Routes = [{
  path: '',
  component: BattlePageComponent,
}]

@NgModule({
  declarations: [
    BattlePageComponent
  ],
  imports: [

RouterModule.forChild(routes),
    CommonModule,
    HeaderModule,
    ButtonModule,
    MatProgressSpinnerModule,
    HeroCardModule,
    SessionModalModule
  ]
})
export class BattlePageModule { }
