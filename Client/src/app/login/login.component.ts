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
    // console.log(form1.value.username);
    // console.log(form1.value.password);
    // console.log(form1)
    this.dataservice.checkusers(form1).subscribe(data => {
      console.log(data, "fromservice");
      // this.auth.verifier(data)
      console.log(data)
      this.type = data.respData.data.role;
      localStorage.setItem('role', this.type)
      if (this.type == "super Admin") {

        console.log("superadmin")

        this.router.navigate(["/superadmin"])
      }
      else if (this.type == "Admin") {
        console.log("admin")
        this.router.navigate(["/admin"])

      }
      else {

        console.log("user")
        this.router.navigate(["/User"])

      }



    })
  }
}
