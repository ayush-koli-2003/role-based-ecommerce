import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { HomeComponent } from './home/home.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UserManagementComponent } from './user-management/user-management.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    HomeComponent,
    ProductManagementComponent,
    OrderManagementComponent,
    OrderDetailsComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    AdminPanelRoutingModule
  ]
})
export class AdminPanelModule { }
