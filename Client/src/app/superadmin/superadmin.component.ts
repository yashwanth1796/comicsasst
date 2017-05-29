import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
  users: any;

  constructor(public dataservice: DataService) { }

  ngOnInit() {
     this.dataservice.getusers()
      .subscribe(resdata => this.users = resdata);
    console.log(this.users)
  }
}

