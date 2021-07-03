import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ChangePassService {
  private httpOptions: any;
    // the actual JWT token
    public token: string;
 
    // the token expiration date
    public token_expires: Date;
   
    // the username of the logged in user
    public username: string;
   
  public errors: any = [];
  baseurl = "http://127.0.0.1:8000";
  constructor(private http: HttpClient,private router :Router) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json',
      'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTg2ODk3NjIwLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.dzkt-vxd4QIo_IqecD58nE9HcufB2KMDxq30GgGS3ks'})
    };
  }
 
  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  public change_password(user) {
    this.http.post(this.baseurl+'/change-password/', JSON.stringify(user), this.httpOptions).subscribe(
      data => {
        this.updateData(data['token']);
        this.router.navigate(['/dashboard']) ;
        
      },
      err => {
        this.errors = err['error'];
      }
    );
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
