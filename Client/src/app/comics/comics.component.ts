import { Component, OnInit } from '@angular/core';
import { DataService } from "app/data.service";
import { DatePickerOptions, DateModel } from 'ng2-datepicker';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  comments: any;
  comicid: any;
  season: any;
  series: any;
  user: any;
  role: any;
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
    Series_name: String,
    Season_name: String,
    starts_on: String,
    ends_on: String,
    image: String
  }
  =
  {
    Name: '',
    Story: '',
    Series_name: '',
    Season_name: '',
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

  newcomment:
  {
    Comic_id: String,
    Comment:String,
    User_name:String,
  }={
    Comic_id:'',
    Comment:'',
    User_name:'',
  }

  constructor(public dataservice: DataService, ) { this.options = new DatePickerOptions() }

  ngOnInit() {
    this.gcomics();
    this.gseasons();
    this. gseries();
    this.getcomments();
    this.status = localStorage.getItem('role')
    this.user = localStorage.getItem('username')
    console.log(this.status)


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
        alert( "Comic deleted") 
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

  addcomic(dropdown,dropdown1) {
    this.Newcomic.starts_on = this.starts_on.formatted;
    this.Newcomic.ends_on = this.ends_on.formatted;
    this.Newcomic.image = this.base64;
    this.Newcomic.Season_name = dropdown;
    this.Newcomic.Series_name = dropdown1;
    
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
    this.comicid= id;
    console.log(id)
    console.log(comment)
    this.newcomment.Comic_id=id
    this.newcomment.User_name=this.user;
    this.newcomment.Comment=comment;
    console.log(this.newcomment)

    this.dataservice.addcomment(this.newcomment)
      .subscribe(resdata => {
        console.log(resdata)
        this.getcomments();
      })
  }
  gseasons() {

    this.dataservice.getseasons()
      .subscribe(resdata => {
        this.seasons = resdata.respData.data;
        console.log(this.seasons)
      })
  }

getcomments(){
  this.dataservice.getcomment()
  .subscribe(resdata => {
    // console.log(resdata.respData.data, "comments")
    this.comments= resdata.respData.data;
    console.log(this.comments, "comments")
    
  })
}
  gseries() {

    this.dataservice.getseries()
      .subscribe(resdata => {
        this.series = resdata.respData.data;

        console.log(this.series)
        // this.dataservice.setseries(this.series)
      })
  }
    pseason(seriesname){
      // alert(2);
    this.dataservice.gsea(seriesname)
    .subscribe(resdata => {
      this.season=resdata.respData.data;
        // console.log(resdata)
      
    })
  }

}
