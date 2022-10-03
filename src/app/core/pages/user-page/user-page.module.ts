import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';
import { RouterModule, Routes } from "@angular/router";
import { HeaderModule } from './../../components/ui/header/header.module';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonModule } from './../../components/ui/button/button.module';
import { HistoryTableModule } from '../../components/ui/history-table/history-table.module';
import { HeroCardModule } from './../../components/ui/hero-card/hero-card.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteModalModule } from './../../components/ui/delete-modal/delete-modal.module';
import { SessionModalModule } from './../../components/ui/session-modal/session-modal.module';

const routes: Routes = [{
  path: '',
  component: UserPageComponent,
}]

@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
   RouterModule.forChild(routes),
    CommonModule,
    HeaderModule,
    MatTabsModule,
    ButtonModule,
    HistoryTableModule,
    HeroCardModule,
    MatDialogModule,
    DeleteModalModule,
    SessionModalModule
  ],

})
export class UserPageModule { }
