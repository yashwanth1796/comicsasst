import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class AuthService implements CanActivate {
  role;
  constructor(public router1: Router) { }
  canActivate(route: ActivatedRouteSnapshot) {
    // console.log();
    var x = route.data;
    console.log(localStorage.getItem("role"))
    console.log(x)
    if (x[0].role == localStorage.getItem("role")) {
      return true;
    }
    else {
this.router1.navigate(['/login'])      
      return false;
      
    }
  }
}