import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  editid: any;
  delted: any;
  flag = 0;
  flag1 = 0;

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
    this.gseries()
  }
  gseries() {

    this.dataservice.getseries()
      .subscribe(resdata => {
        this.series = resdata.respData.data;

        console.log(this.series)
      })
  }
  dseries(items) {
    console.log(items)
    this.dataservice.deleteseries(items)
      .subscribe(res => {
        this.delted = res.status;
        console.log(this.delted)
        // console.log(res)
        if (this.delted == "true") {
          alert("series Deleted");
        }
        this.gseries()



      })

  }


  addseries() {
    this.dataservice.postseries(this.NewSeries)
      .subscribe(data => {
        console.log(data);
        this.gseries();
      })


  }
  openaaddform() {
    this.flag = 1;
  }

  saveseri(_id) {
    this.editid = _id;
    this.flag1 = 1;
  }
  updateser(form1) {
    console.log(form1)

    this.dataservice.updateseries(this.editid, form1)
      .subscribe(data => {
        console.log(data)
        this.gseries();
        this.flag1 = 0
      })
  }

}
