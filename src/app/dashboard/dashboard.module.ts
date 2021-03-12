import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RouterModule } from '@angular/router';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';

const dashboardRoutes = [
  {
    path:'', children: [
      {path:'', component:DashboardPageComponent},
      {path:'new-transaction', component:NewTransactionComponent},
      {path:'view-transaction', component:ViewTransactionComponent}
    ]
  }
];

@NgModule({
  declarations: [DashboardPageComponent, NewTransactionComponent, ViewTransactionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,	
    MatSortModule,	
    MatFormFieldModule,	
    MatInputModule,	
    MatPaginatorModule,
    MatFormFieldModule,
    MatCheckboxModule,
    RouterModule.forChild(dashboardRoutes)
  ]
})
export class DashboardModule { 
  constructor(){
    console.log("Dashboard module loaded");
  }
}
