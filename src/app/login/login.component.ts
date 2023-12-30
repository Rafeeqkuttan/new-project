import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signupUsers: any[] = [];
  signupData: any = {}
  constructor(private router: Router) {

  }
  loginObj: any = {
    userName: '',
    password: ''
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData)
      this.signupData = this.signupUsers[0]
    }
    console.log(localData);
    console.log(this.signupUsers);
    console.log(this.signupData);
    console.log(this.signupData.userName);


  }

  onSubmit(form:NgForm){
    console.log("Login Value", form.value);

    this.loginObj.userName = form.value.name
    this.loginObj.password = form.value.password
    console.log(this.loginObj.userName);
    console.log(this.loginObj.password);

  }

  onLogin() {
   
    console.log(this.loginObj.userName);
    console.log(this.loginObj.password);
    console.log(this.signupData.userName);
    console.log(this.signupData.password);

    if (this.loginObj.userName == this.signupData.userName && this.loginObj.password == this.signupData.password) {
      alert('User Login Successfully')
      this.router.navigate(['/Product'])
    }
    else {
      alert('Wrong Credientials');
    }

  }
  onSignUp(){
    this.router.navigate(['/Register'])
  }
}