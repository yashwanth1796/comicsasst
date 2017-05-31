import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public router1: Router) { }

  ngOnInit() {
  }
logout() {
    localStorage.clear()
    console.log(localStorage.getItem('role'))
    this.router1.navigate(['/login'])
  }
}
