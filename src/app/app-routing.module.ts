import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: 'registration',
    loadChildren: () => import('./core/pages/registration-page/registration-page.module').then((mod) => mod.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/pages/login-page/login-page.module').then((mod) => mod.LoginPageModule),
  },
   {
    path: 'home',
    loadChildren: () => import('./core/pages/home-page/home-page.module').then((mod) => mod.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'detail-page/:id',
    loadChildren: () => import('./core/pages/details-page/details-page.module').then((mod) => mod.DetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user-page/:userName',
    loadChildren: () => import('./core/pages/user-page/user-page.module').then((mod) => mod.UserPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'battle-page',
    loadChildren: () => import('./core/pages/battle-page/battle-page.module').then((mod) => mod.BattlePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./core/pages/login-page/login-page.module').then((mod) => mod.LoginPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
