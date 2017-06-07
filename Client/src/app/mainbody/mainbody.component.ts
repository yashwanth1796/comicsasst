import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent implements OnInit {
   flag=0;
  status: any;
  Searchdata: any;
  searchresults: any;
  flag1=0;
 
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


search() {
this.dataservice.search(this.Searchdata).subscribe(res => {
      this.status= res.status;
      console.log(this.status);
      console.log(res);
      
   if(this.status==true){
      this.searchresults = res.respData.data;
     this.flag = 0;
     this.flag1=1;
      

   }
   else{
     this.flag = 1;
     this.flag1=0;

   }
    })
  }
}





