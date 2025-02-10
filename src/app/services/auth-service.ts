import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AuthService{
    isLogged:boolean;
    role:string;
    name:string;

    constructor(){
        this.isLogged=false;
        this.role="";
        this.name="";
    }

    setRole(role:string,name:string){
        console.log(role,name);
        
        this.name=name;
        this.role=role;
        this.isLogged=true;
    }

    getData(){
        console.log("get called");
        
        return {name:this.name,isLogged:this.isLogged,role:this.role};
    }
}