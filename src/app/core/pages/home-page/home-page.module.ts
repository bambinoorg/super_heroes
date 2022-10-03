import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import {RouterModule, Routes} from "@angular/router";
import {HeaderModule} from "../../components/ui/header/header.module";
import {InputModule} from "../../components/ui/input/input.module";
import {ButtonModule} from "../../components/ui/button/button.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AlphabetKeyboardModule} from "../../components/ui/alphabet-keyboard/alphabet-keyboard.module";
import { HeroCardModule } from './../../components/ui/hero-card/hero-card.module';
import { SessionModalModule } from './../../components/ui/session-modal/session-modal.module';

const routes: Routes = [ {
  path: '',
  component: HomePageComponent,
}]

@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [


    RouterModule.forChild(routes),
        CommonModule,
        HeaderModule,
        InputModule,
        ButtonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        AlphabetKeyboardModule,
        HeroCardModule,
        SessionModalModule
    ], 
    providers: [
    ]
})
export class HomePageModule { }
