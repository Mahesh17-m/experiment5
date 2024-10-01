import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,JsonPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

student:any={
  name:'',
  reg:'',
  password:'',
  isChecked:''
}
formsValue:any

onSubmit(){
  alert("Thank you for your reponse")
  console.log(this.student);
}
}