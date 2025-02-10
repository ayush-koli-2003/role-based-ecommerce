import { Injectable, OnInit } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth-service";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate,CanDeactivate<boolean>{
    isLogged;
    role:string;
    constructor(private authService:AuthService,private router:Router){
        let cred = this.authService.getData();

        this.isLogged=cred.isLogged;
        this.role=cred.role;
        
    }

    
    
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        let cred = this.authService.getData();

        this.isLogged=cred.isLogged;
        this.role=cred.role;
        console.log(this.isLogged,this.role);
        console.log(this.isLogged,this.role);
        if(this.isLogged===false){
            alert('First login');
            this.router.navigate(['/login']);
            return false;
        }

        
        

        if(this.role==='admin'){
            return true;
        }

        if(this.role==='customerSupport' && (state.url==='/admin/orders' || state.url==='/admin/home')){
            return true;
        }

        if(this.role==='manager' && (state.url==='/admin/orders' || state.url==="/admin/products"|| state.url==='/admin/home')){
            return true;
        }

        alert("You are not authorized");
        console.log(state.url);
        
        return false;
    }

    canDeactivate():boolean{
        alert("Are you sure?")
        return true;
    }
}