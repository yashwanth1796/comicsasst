import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  status: any;
  flag1 = 0;
  Newuser: {
    username: String,
    password: String,
    role: String,
  }
  =
  {
    username: '',
    password: '',
    role: ''
  };
  upuser: any;
  users: any;
  flag = 0;

  constructor(public dataservice: DataService) { }

  ngOnInit() {
    this.gusers()
  }
  gusers() {

    this.dataservice.getusers()
      .subscribe(resdata => {
        this.users = resdata.respData.data;

        console.log(this.users)
      })
  }
  updateuser(form1) {

    this.Newuser.password = form1.password;
    this.Newuser.role = form1.role;
    console.log(this.Newuser)
    this.dataservice.updateuser(this.Newuser)
      .subscribe(resdata => {
        this.upuser = resdata.respData.data;

        this.status = resdata.status;
        console.log(this.status)

        if (this.status = "true") {
          alert(this.Newuser.username + "Updated")
          console.log(this.upuser, "updated")
          this.gusers()
          this.flag = 0;
        }
        else {
          alert("error")
          this.gusers()

        }

      })
  }

  save(username) {
    this.Newuser.username = username;
    this.flag = 1;
    console.log(this.Newuser.username)
  }

  duser(item) {
    this.dataservice.deleteuser(item)
      .subscribe(resdata => {
        console.log(resdata)
      })

  }
  flagd() {
    this.flag1 = 1;
  }
  addusers() {
    console.log(this.Newuser)
    this.dataservice.postusers(this.Newuser)
      .subscribe(resdata => {
        console.log(resdata)
        this.gusers()
      })
  }
}
