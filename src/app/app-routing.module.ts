import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service'


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule),},
  {path:'dashboard', loadChildren: () => import('src/app/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
