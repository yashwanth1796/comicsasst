import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Configuration } from './config';

@Injectable()
export class DataService {
  seriesdata: any;
  set: any;
  // variable: string
  constructor(public httpService: Http, public con: Configuration) { }
  setData(data) {
    // this.variable = data;
  }

  getcomics(): Observable<any> {

    return this.httpService.get(this.con.UrlObj.comicURL).map(
      data => data.json()
    );
  }
  getseries(): Observable<any> {

    return this.httpService.get(this.con.UrlObj.seriesURL).map(
      data => data.json()
    );
  }
  getseasons(): Observable<any> {

    return this.httpService.get(this.con.UrlObj.seasonsURL).map(
      data => data.json()

    );

  }
  getusers(): Observable<any> {

    return this.httpService.get(this.con.UrlObj.usersURL).map(
      data => data.json()
    );
  }
  checkusers(a): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    console.log(a + "service")
    return this.httpService.post(this.con.UrlObj.checkurl, a, headers)
      .map((res => res.json()));
  }

  search(a): Observable<any> {
    console.log(a, "in service")
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.con.UrlObj.searchurl + a, headers).map(
      data => data.json()
    );
  }

  postseries(a) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(a)
    return this.httpService.post(this.con.UrlObj.postseriesURL, a, headers)
      .map((res => res.json()));
  }
  deleteseries(a): Observable<any> {
    console.log(a)
    return this.httpService.delete(this.con.UrlObj.dseriesURL + a).map(
      data => data.json()
    );
  }
  updateuser(a): Observable<any> {
    console.log(a, "in service")

    return this.httpService.put(this.con.UrlObj.upusersURL, a).map(
      data => data.json()

    )
  }
  updateseries(editid, a): Observable<any> {
    console.log(a, "service")

    return this.httpService.put(this.con.UrlObj.dseriesURL + editid, a).map(
      data => data.json()

    )
  }

  deleteseasons(a): Observable<any> {
    console.log(a)
    return this.httpService.delete(this.con.UrlObj.dseasonsURL + a).map(
      data => data.json()
    );
  }
  postseasons(a) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(a)
    return this.httpService.post(this.con.UrlObj.postseasonsURL, a, headers)
      .map((res => res.json()));
  }
  updateseasons(editid, a): Observable<any> {
    console.log(a, "service")

    return this.httpService.put(this.con.UrlObj.seasonsURL + '/' + editid, a).map(
      data => data.json()

    )
  }

  deleteuser(a): Observable<any> {

    return this.httpService.delete(this.con.UrlObj.upusersURL + '/' + a).map(
      data => data.json()
    );
  }

  postusers(a): Observable<any> {

    return this.httpService.post(this.con.UrlObj.usersURL, a).map(
      data => data.json()
    );
  }
  deletecomics(a): Observable<any> {
    return this.httpService.delete(this.con.UrlObj.comicURL + '/' + a).map(
      data => data.json()
    );
  }

  updatecomics(editid, a): Observable<any> {
    console.log(a, "service")

    return this.httpService.put(this.con.UrlObj.comicURL + '/' + editid, a).map(
      data => data.json()

    )
  }
  postcomics(a): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(a)
    return this.httpService.post(this.con.UrlObj.comicURL, a, headers)
      .map((res => res.json()));
  }

  addcomment(a): Observable<any> {

    console.log(a)

    return this.httpService.post(this.con.UrlObj.commentsURL, a)
      .map(resdata => resdata.json())
  }

  gsea(a): Observable<any> {
    return this.httpService.get(this.con.UrlObj.gseasURL + a)
    .map(resdata => resdata.json())
  }

getcomment(): Observable<any> {

  return this.httpService.get(this.con.UrlObj.commentsURL)
      .map(resdata => resdata.json())
  

}
}
