import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";

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
  constructor(public dataservice: DataService) { }

  ngOnInit() {

  }

  addseries() {
    this.dataservice.postseries(this.NewSeries)
      .subscribe(data => {
        console.log(data);
      })


  }

}

