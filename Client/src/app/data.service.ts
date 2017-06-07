import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Configuration } from './config';

@Injectable()
export class DataService {
  seriesdata: any;
  set: any;
  JWT: String;
  // variable: string
  constructor(public httpService: Http, public con: Configuration) { }
  setData(data) {
    // this.variable = data;
  }

  getcomics(): Observable<any> {
    this.JWT= localStorage.getItem('token')
    console.log(this.JWT)
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.con.UrlObj.comicURL, options).map(
      data => data.json()
    );
  }
  getseries(): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
     let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });

    return this.httpService.get(this.con.UrlObj.seriesURL, options).map(
      data => data.json()
    );
  }
  getseasons(): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
        let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });

    return this.httpService.get(this.con.UrlObj.seasonsURL,options).map(
      data => data.json()

    );

  }
  getusers(): Observable<any> {
    this.JWT =localStorage.getItem('token')
        let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });

    return this.httpService.get(this.con.UrlObj.usersURL, options).map(
      data => data.json()
    );
  }
  checkusers(a): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });  
    return this.httpService.post(this.con.UrlObj.checkurl, a,headers)
      .map((res: Response) => res.json()
      );
  }

  search(a): Observable<any> {
    console.log(a, "in service")
 let headers = new Headers({'Content-Type': 'application/json'});

    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.con.UrlObj.searchurl + a).map(
      data => data.json()
    );
  }

  postseries(a) {
    this.JWT =localStorage.getItem('token')
    
    console.log(a,"service")
    this.JWT = localStorage.getItem('token')
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ this.JWT});
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.con.UrlObj.postseriesURL, a, options)
      .map((res => res.json()));
  }
  deleteseries(a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
      let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.delete(this.con.UrlObj.dseriesURL + a,options).map(
      data => data.json()
    );
  }
  updateuser(a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
     let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.put(this.con.UrlObj.upusersURL, a,options).map(
      data => data.json()

    )
  }
  updateseries(editid, a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
      let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });

    return this.httpService.put(this.con.UrlObj.dseriesURL + editid, a,options).map(
      data => data.json()

    )
  }

  deleteseasons(a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.delete(this.con.UrlObj.dseasonsURL + a,options).map(
      data => data.json()
    );
  }
  postseasons(a) {
    this.JWT =localStorage.getItem('token')
    
        let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.con.UrlObj.postseasonsURL, a, options)
      .map((res => res.json()));
  }
  updateseasons(editid, a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });

    return this.httpService.put(this.con.UrlObj.seasonsURL + '/' + editid, a,options).map(
      data => data.json()

    )
  }

  deleteuser(a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
        let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });

    return this.httpService.delete(this.con.UrlObj.upusersURL + '/' + a,options).map(
      data => data.json()
    );
  }

  postusers(a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.con.UrlObj.usersURL, a,options).map(
      data => data.json()
    );
  }
  deletecomics(a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
        let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.delete(this.con.UrlObj.comicURL + '/' + a,options).map(
      data => data.json()
    );
  }

  updatecomics(editid, a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.put(this.con.UrlObj.comicURL + '/' + editid, a,options).map(
      data => data.json()

    )
  }
  postcomics(a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
    console.log(a,"ser")
      let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.con.UrlObj.comicURL, a, options)
      .map((res => res.json()));
  }

  addcomment(a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });

    return this.httpService.post(this.con.UrlObj.commentsURL, a,options)
      .map(resdata => resdata.json())
  }

  gsea(a): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
        let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.con.UrlObj.gseasURL + a,options)
      .map(resdata => resdata.json())
  }

  getcomment(): Observable<any> {
    this.JWT =localStorage.getItem('token')
    
       let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Bearer '+ this.JWT )
    let options = new RequestOptions({ headers: headers });

    return this.httpService.get(this.con.UrlObj.commentsURL,options)
      .map(resdata => resdata.json())


  }
  // settoken() {
  //   this.JWT = localStorage.getItem('token');
  // }

}
