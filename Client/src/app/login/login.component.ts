import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from "app/data.service";
import { AuthService } from "app/auth.service";
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: any;
  user: string;
  pass: string;

  constructor(public dataservice: DataService, public router: Router) {
    this.user = "";
    this.pass = "";
  }
  ngOnInit() {
  }

  check(form1) {
    this.dataservice.checkusers(form1).subscribe(data => {
      console.log(data, "fromservice");
      console.log(data)
      this.type = data.respData.data.role;
      localStorage.setItem('role', this.type)
switch(this.type){
  case  "super Admin" : this.router.navigate(["/superadmin"])
  break;
  case  "Admin" : this.router.navigate(["/admin"])
  break;
  case  "user" : this.router.navigate(["/User"])
  break;
  default:
  alert("user dosen't exist")
   this.router.navigate(["/login"])
  
}


    })
  }
}
