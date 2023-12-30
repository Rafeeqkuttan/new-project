import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 

  value :boolean = false
  signupUsersdata: any[]=[];

  signupObj: any ={
    userName: '',
    lastName: '',
    email: '',
    password: '',
    retypepassword: '',
    contact: ''
  }
constructor(private router: Router){
}
ngOnInit(): void {
 }
onSignUp(){
    this.signupUsersdata.push(this.signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsersdata));
  
  const isUserValue = this.signupUsersdata.find(m => m.userName == this.signupObj.userName && m.lastName == this.signupObj.lastName && m.email == this.signupObj.email && m.password == this.signupObj.password && m.retypepassword == this.signupObj.retypepassword && m.contact == this.signupObj.contact);
    // if (isUserValue != ''){
  if (isUserValue != ' ' ){
      alert('User Registered Successfully')
      this.router.navigate(['/Login'])

    } else {
      alert('Wrong Credientials');
    }
      
  }



}

