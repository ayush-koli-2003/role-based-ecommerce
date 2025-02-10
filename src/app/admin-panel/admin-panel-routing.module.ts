import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AuthGuard } from '../guards/auth-guards';
import { AdminPanelComponent } from './admin-panel.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent,},
  {path:'orders',component:OrderManagementComponent,canActivate:[AuthGuard],
    children:[
      {path:':id',component:OrderDetailsComponent}
    ]
  },
  {path:'products',component:ProductManagementComponent,canActivate:[AuthGuard],canDeactivate:[AuthGuard]},
  {path:'users',component:UserManagementComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
