import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  editid: any;
  flag = 0;
  flag1 = 0;
  seasons: any;
  season: any;
  Newseason: {
    Name: String,
    description: String,
    Series_id: String,
    Season_id: String,
    starts_on: String,
    ends_on: String
  }
  =
  {
    Name: '',
    description: '',
    Series_id: '',
    Season_id: '',
    starts_on: '',
    ends_on: ''
  };
  constructor(public dataservice: DataService) { }

  ngOnInit() {
    this.gseasons()

  }
  gseasons() {

    this.dataservice.getseasons()
      .subscribe(resdata => {
        this.seasons = resdata.respData.data;
        console.log(this.seasons)
      })
  }

  addseasons(data) {
    data.starts_on = data.starts_on.formatted;
    data.ends_on = data.ends_on.formatted;
    this.dataservice.postseasons(data)
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

}
