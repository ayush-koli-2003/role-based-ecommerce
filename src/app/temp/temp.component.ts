import { Component } from '@angular/core';
import { FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-temp',
  standalone: true,
  
  templateUrl: './temp.component.html',
  styleUrl: './temp.component.css'
})
export class TempComponent {

  formGroup:FormGroup;

  constructor(){
    this.formGroup= new FormGroup({
      
    })
  }

}
