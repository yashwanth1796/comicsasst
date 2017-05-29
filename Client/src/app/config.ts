import { MainbodyComponent } from './mainbody/mainbody.component';
import { RouterModule,Routes } from '@angular/router';


export class Configuration {

    //URL
    public UrlObj = {
        comicURL: 'http://192.168.15.100:2000/api/v1/comics',
        seasonsURL: 'http://192.168.15.100:2000/api/v1/seasons',
        seriesURL: 'http://192.168.15.100:2000/api/v1/series',
        usersURL: 'http://192.168.15.100:2000/api/v1/users',
        checkurl: 'http://192.168.15.100:2000/api/v1/users/check',
        searchurl:"http://192.168.15.100:2000/api/v1/search/",
        postseriesURL:'http://192.168.15.100:2000/api/v1/series',
        postseasonsURL:'http://192.168.15.100:2000/api/v1/seasons',
        postcomicsURL:'http://192.168.15.100:2000/api/v1/comics',
        dseriesURL: 'http://192.168.15.100:2000/api/v1/series/',
        upusersURL: 'http://192.168.15.100:2000/api/v1/update',
        dseasonsURL: 'http://192.168.15.100:2000/api/v1/seasons/',
        
        
        
        
    
    }
}