import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './user-management/login/login.component';
import { LoginComponent } from './user/login/login.component';
import { UserModule } from './user/user.module';
import { UserRoutingModule } from './user/user-routing.module';

const routes: Routes = [
  // {path:'',pathMatch:'full',redirectTo:'/user'},
  {path:'',redirectTo:'/user',pathMatch:'full'},
  {path:'admin',loadChildren:()=> import ('./admin-panel/admin-panel.module').then(m=>m.AdminPanelModule)},
  // {path:'login',component:LoginComponent},
  // {path:'user',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),UserModule,UserRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
