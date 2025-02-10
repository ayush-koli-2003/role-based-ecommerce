import { Component} from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    inputFormGroup:FormGroup;
    constructor(private authService:AuthService,private router:Router){
      this.inputFormGroup = new FormGroup({
        'name': new FormControl(''),
        'role': new FormControl('')
      })
    }


    onSubmit(){
      
      this.authService.setRole(this.inputFormGroup.value.role,this.inputFormGroup.value.name);
      this.router.navigate(['/admin/'])
    }

    // Template driven

    // name:string=""

    // onSubmit(userForm:any){

    // }
}
