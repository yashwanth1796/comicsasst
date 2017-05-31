import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  flag=0;
  // nodata: number;
  status: any;
  Searchdata: any;
  searchresults: any;
  flag1=0;
 

  constructor(public dataservice: DataService) { }

  ngOnInit() {
    
  }
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
