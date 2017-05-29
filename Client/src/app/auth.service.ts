import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';
import {ActivatedRouteSnapshot} from '@angular/router';


@Injectable()
export class AuthService implements CanActivate {
  role;
  constructor(public router1:Router) { }
  verifier(data){
    console.log(data)
    if(data=="User doesnt exist")
    {
      alert("WRONG CREDENTIALS")
    }
    else {
      this.role=data.type;
      console.log(this.role);
      this.router1.navigate(['/superadmin'])
    }
  }
  
  canActivate(route: ActivatedRouteSnapshot) {
    // console.log();
    var x= route.data;
    console.log(x)
    console.log(x[0].type[0])
    console.log(this.role)
    if(x[0].type[0]==this.role||x[0].type[1]==this.role)
    {
      return true;
    }
    else
    {
      return false;
    } 
    
  }
}

