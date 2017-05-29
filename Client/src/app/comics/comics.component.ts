import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  base64: any;
  editid: any;
  comics: any;
  flag1 = 0;
  flag = 0;
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
    Image:String
  }
  =
  {
    Name: '',
    Story: '',
    Series_id: '',
    Season_id: '',
    starts_on: '',
    ends_on: '',
    Image:''
  };

  constructor(public dataservice: DataService, ) { this.options = new DatePickerOptions() }

  ngOnInit() {
    this.gcomics()

  }


  gcomics() {
    console.log(this.Newcomic)
    this.dataservice.getcomics()
      .subscribe(resdata => {
        console.log(resdata.respData.data)
        this.comics = resdata.respData.data
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

  addcomic(data) {
    data.starts_on = data.starts_on.formatted;
    data.ends_on = data.ends_on.formatted;
    data.image=this.base64;
    console.log(data)
    this.dataservice.postcomics(data)
      .subscribe(resdata => {
        this.flag = 0
        this.gcomics()
      })
  }
  changeListener(event){
  console.log(event.target)
  this.encodeImageFileAsURL(event.target)
}
encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend=(data=>{
    this.base64=reader.result;
    // this.Newcomic.Image= this.base64;
    //console.log('RESULT', reader.result)
  })
  reader.readAsDataURL(file);
  //console.log(this.base64);
}
}