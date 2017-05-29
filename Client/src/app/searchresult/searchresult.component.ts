import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  Searchdata: any;
  searchresults: any;
 

  constructor(public dataservice: DataService) { }

  ngOnInit() {
    
  }
search() {
this.dataservice.search(this.Searchdata).subscribe(res => {
      this.searchresults = res.respData.data;
      console.log(this.searchresults);
   
    })
  }
}
