import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  role: string;
  seasons: any;
  base64: any;
  editid: any;
  comics: any;
  flag1 = 0;
  flag = 0;
  status;
  date: DateModel;
  options: DatePickerOptions;
  Comics: any;
  Newcomic: {
    Name: String,
    Story: String,
    Series_id: String,
    Season_id: String,
    starts_on: String,
    ends_on: String,
    image: String
  }
  =
  {
    Name: '',
    Story: '',
    Series_id: '',
    Season_id: '',
    starts_on: '',
    ends_on: '',
    image: ''
  };
  starts_on: {
    formatted: ''
  }
  ends_on: {
    formatted: ''
  }
  constructor(public dataservice: DataService, ) { this.options = new DatePickerOptions() }

  ngOnInit() {
    this.gcomics()
    this.gseasons();
    this.status = localStorage.getItem("role")


  }


  gcomics() {
    console.log(this.Newcomic)
    this.dataservice.getcomics()
      .subscribe(resdata => {
        console.log(resdata.respData.data)
        this.comics = resdata.respData.data;
      })

  }

  dcomics(items) {
    this.dataservice.deletecomics(items)
      .subscribe(resdata => {
        console.log(resdata)
        this.gcomics()

      })
  }
  savecom(id) {
    this.editid = id
    this.flag1 = 1;
  }
  updatecom(form) {
    // console.log(this.Newcomic.ends_on)
    this.dataservice.updatecomics(this.editid, form)
      .subscribe(resdata => {
        console.log(resdata)
        this.gcomics();
        this.flag1 = 0;
      })
  }
  openaaddform() {
    this.flag = 1;
  }

  addcomic(dropdown) {
    this.Newcomic.starts_on = this.starts_on.formatted;
    this.Newcomic.ends_on = this.ends_on.formatted;
    this.Newcomic.image = this.base64;
    this.Newcomic.Season_id = dropdown;
    console.log(this.Newcomic)
    this.dataservice.postcomics(this.Newcomic)
      .subscribe(resdata => {
        this.flag = 0
        this.gcomics()
      })
  }
  changeListener(event) {
    console.log(event.target)
    this.encodeImageFileAsURL(event.target)
  }
  encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = (data => {
      this.base64 = reader.result;
      // this.Newcomic.Image= this.base64;
      //console.log('RESULT', reader.result)
    })
    reader.readAsDataURL(file);
    //console.log(this.base64);
  }
  postcomment(id, comment) {
    console.log(id)
    console.log(comment)

    this.dataservice.addcomment(id, comment)
      .subscribe(resdata => {
        console.log(resdata)
      })
  }
  gseasons() {

    this.dataservice.getseasons()
      .subscribe(resdata => {
        this.seasons = resdata.respData.data;
        console.log(this.seasons)
      })
  }

}
