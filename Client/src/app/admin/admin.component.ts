import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { CanActivate, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  series: any;
  NewSeries: {
    name: String,
    description: String,
    Series_id: Number
  }
  =
  {
    name: '',
    description: '',
    Series_id: 0
  };
  constructor(public dataservice: DataService, public router1: Router) { }

  ngOnInit() {

  }

  addseries() {
    this.dataservice.postseries(this.NewSeries)
      .subscribe(data => {
        console.log(data);
      })


  }
  logout() {
    localStorage.clear()
    console.log(localStorage.getItem('role'))
    this.router1.navigate(['/login'])
  }

  
}

