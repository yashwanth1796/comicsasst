import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  date: any;
  series: any;
  editid: any;
  flag = 0;
  flag1 = 0;
  seasons: any;
  season: any;
  Newseason = {
    Name: '',
    description: '',
    Series_id: '',
    Season_id: '',
    starts_on: '',
    ends_on: ''

  };
  ends_on = {
    formatted: ''
  };
  starts_on = {
    formatted: ''
  };
  constructor(public dataservice: DataService) { }

  ngOnInit() {
    this.gseasons()
    this.gseries();

  }
  gseasons() {

    this.dataservice.getseasons()
      .subscribe(resdata => {
        this.seasons = resdata.respData.data;
        console.log(this.seasons)
      })
  }

  addseasons(dropdown) {
    console.log(dropdown)
    this.Newseason.ends_on=this.ends_on.formatted;
    this.Newseason.starts_on=this.starts_on.formatted;
    this.Newseason.Series_id=dropdown;
    console.log(this.Newseason)
    // console.log(this.ends_on)
    

    this.dataservice.postseasons(this.Newseason)
      .subscribe(resdata => {
        console.log(resdata)
        this.gseasons();
        this.flag = 0;
      })

  }

  openaaddform() {
    this.flag = 1;
  }

  dseasons(items) {
    this.dataservice.deleteseasons(items)
      .subscribe(resdata => {
        console.log(resdata)
        this.gseasons()
      })
  }
  savesea(item) {
    this.editid = item
    this.flag1 = 1;
  }
  updatesea(form) {
    form.starts_on = form.starts_on.formatted;
    form.ends_on = form.ends_on.formatted
    this.dataservice.updateseasons(this.editid, form)
      .subscribe(resdata => {
        console.log(resdata)
        this.gseasons();
        this.flag1 = 0;
      })
  }
  gseries() {

    this.dataservice.getseries()
      .subscribe(resdata => {
        this.series = resdata.respData.data;

        console.log(this.series)
      })
  }
}
