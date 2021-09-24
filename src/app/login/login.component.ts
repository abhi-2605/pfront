import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataservice:DataService , private router :Router) { }
  logindata={
    email:'',
    pass:''
  }
  logdata={
    token:'',
    msg:''
  }
  id:any;
  ngOnInit(): void {
  }
  login(){
    this.dataservice.login(this.logindata)
    .subscribe(data =>{
     
     if(data.toString()=="Invalid password"){
       alert('invalid password')
     }
     else if(data.toString()=="User not resgistered"){
      alert('User not resgistered')
     }
     else{
    this.logdata = JSON.parse(JSON.stringify(data))
    this.id = this.logdata.token
    localStorage.setItem('token', this.id.toString())


      if(this.logdata.msg ="user"){
        this.router.navigate(["product"])
      }
      else if (this.logdata.msg =="user and baker"){
        this.router.navigate(["product-list"])
      } else {
        this.router.navigate(["baker"])
      }


   
     }
    })
  
  }
}
