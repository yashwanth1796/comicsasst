import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
  GetSearch: any;
  seasons: any;
  series: any;
  SearchItem: string;
  constructor(public dataservice: DataService, public router1: Router) { }

  ngOnInit() {


  }

  gseries() {

    this.dataservice.getseries()
      .subscribe(resdata => this.series = resdata);
    console.log(this.series)

  }
  gseasons() {

    this.dataservice.getseasons()
      .subscribe(resdata => this.seasons = resdata);
    console.log(this.seasons)

  }
//   search() {
// this.dataservice.search(this.SearchItem).subscribe(res => {
//       this.GetSearch = res.respData.data;
//       console.log(this.GetSearch);
   
//     })
//   }
}
