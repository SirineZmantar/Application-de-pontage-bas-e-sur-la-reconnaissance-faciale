import { Injectable } from '@angular/core';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) { }


  public is_Authentificated():boolean{
   const  token=localStorage.getItem('token');
    return this.jwtHelper.isTokenExpired(token);

}
}
