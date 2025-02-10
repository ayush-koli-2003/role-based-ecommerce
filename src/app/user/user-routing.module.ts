import { Routes,RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";

const routes:Routes=[
    {path:'user',pathMatch:'full',redirectTo:'/user/login'},
    {path:'user/login',component:LoginComponent},
    {path:'user/register',component:RegisterComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserRoutingModule{}