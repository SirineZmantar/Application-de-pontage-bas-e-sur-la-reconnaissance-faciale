import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import{AlertService} from '../auth-signin/alert.service';
@Injectable()
export class UserService {
 
  // http options used for making API calls
  private httpOptions: any;
  loading=false;
  // the actual JWT token
  public token: string;
 
  // the token expiration date
  public token_expires: Date;
 
  // the username of the logged in user
  public username: string;
 
  // error messages received from the login attempt
  public errors: any = [];
  baseurl = "http://127.0.0.1:8000";
  constructor(private http: HttpClient,private router :Router , private alertService: AlertService) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json',
      'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTg2ODk3NjIwLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.dzkt-vxd4QIo_IqecD58nE9HcufB2KMDxq30GgGS3ks'})
    };
  }
 
  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public login(user) {
    this.loading = false;
    this.http.post(this.baseurl+'/api-token-auth/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        this.router.navigate(['/dashboard']) ;
        
      },
      err => {
        this.errors = err['nom ou mot de passe incorrect!'];
        console.log('nom ou mot de passe incorrect');
        this.alertService.error('nom ou mot de passe incorrect',false);
        this.loading = true;
      }
    );
    return user
  }
 
  // Refreshes the JWT token, to extend the time the user is logged in
  public refreshToken() {
    this.http.post(this.baseurl+'/api-token-refresh/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
      },
      err => {
        this.errors = err['error'];
      }
    );
  }
 
  public logout() {
    this.token = null;
    this.token_expires = null;
    this.username = null;
  }
 
  private updateData(token) {
    this.token = token;
    this.errors = [];
 
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;

    console.log(token_decoded);
  }

  
}