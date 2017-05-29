import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { DataService } from "app/data.service";
import { rou } from './route';
import { Configuration } from './config';
import { LoginComponent } from './login/login.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { SeasonsComponent } from './seasons/seasons.component';
// import { AuthService } from "app/auth.service";
import { SearchresultComponent } from './searchresult/searchresult.component';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { DatePickerModule } from 'ng2-datepicker';

@NgModule({
  declarations: [
    AppComponent,
    MainbodyComponent,
    LoginComponent,
    SuperadminComponent,
    ComicsComponent,
    SeriesComponent,
    SeasonsComponent,
    SearchresultComponent,
    AdminComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatePickerModule,
    RouterModule.forRoot(rou)
  ],
  providers: [DataService,Configuration],
  bootstrap: [AppComponent]
})
export class AppModule { }
