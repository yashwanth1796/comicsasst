import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
  // users: any;

  constructor(public dataservice: DataService,public router1: Router) { }

  ngOnInit() {
 
}
 logout() {
    localStorage.clear()
    console.log(localStorage.getItem('role'))
    this.router1.navigate(['/login'])
  }
}