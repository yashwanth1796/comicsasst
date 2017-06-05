
import { AppComponent } from './app.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { RouterModule, Routes } from '@angular/router';
import { Configuration } from './config'
import { LoginComponent } from './login/login.component';
// import { AuthService } from "app/auth.service";
import { SuperadminComponent } from './superadmin/superadmin.component';
import { ComicsComponent } from './comics/comics.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { AdminComponent } from './admin/admin.component';
import { SeriesComponent } from './series/series.component';
import { UserComponent } from './user/user.component';
import { SeasonsComponent } from './seasons/seasons.component';
import { AuthService } from "app/auth.service";

import { UsersComponent } from './users/users.component';


export const rou: Routes = [
    { path: '', component: MainbodyComponent },
    { path: 'login', component: LoginComponent },


    {
        path: 'superadmin', component: SuperadminComponent, data: [{
            role: 'super Admin'
        }], canActivate: [AuthService], children: [
            { path: 'users', component: UsersComponent },
        ],
    },
    // { path: 'comics', component: ComicsComponent },
    { path: 'searchresult', component: SearchresultComponent },
    {
        path: 'admin', component: AdminComponent, data: [{
            role: 'Admin'
        }], canActivate: [AuthService],
        children: [
            { path: 'comics', component: ComicsComponent },
            { path: 'seasons', component: SeasonsComponent },
            { path: 'series', component: SeriesComponent },

        ]
    },
    // { path: 'series', component: SeriesComponent },
    // { path: 'users', component: UsersComponent },
    {
        path: 'User', component: UserComponent,
        children: [
            { path: 'comics', component: ComicsComponent },
            // { path: 'searchresult', component: SearchresultComponent },

        ]
    },


    // { path: 'seasons', component: SeasonsComponent },





];
