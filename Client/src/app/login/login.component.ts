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
  usercheck: any;
  token: any;
  type1: any;
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
    console.log(form1)
    this.dataservice.checkusers(form1).subscribe(data => {
      this.usercheck = data.respData.data
      if (this.usercheck == 'user not found') {
        alert('user not found')
      }
      else {
        this.token = data.respData.token;
        localStorage.setItem('token', this.token)
        this.type = data.respData.data;
        localStorage.setItem('role', this.type)
        this.dataservice.settoken();
        console.log(this.type, "role in login")

        switch (this.type) {
          case "superadmin": this.router.navigate(["/superadmin"])
            break;
          case "admin": this.router.navigate(["/admin"])
            break;
          case "user": this.router.navigate(["/User"])
            break;
          case " ": this.router.navigate(["/login"])
            break;
          default:
            alert("Wrong password")
            this.router.navigate(["/login"])

        }
      }

    })
  }
}
