import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import { FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {throwError} from 'rxjs';
import {ReactiveFormsModule} from '@angular/forms';
import{ AlertService} from './alert.service';
import { Subscription } from 'rxjs';


// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-auth-signin',
  templateUrl: './auth-signin.component.html',
  styleUrls: ['./auth-signin.component.scss'],
  providers : [UserService]
})
export class AuthSigninComponent implements OnInit {
  public user: any;

  loginForm : FormGroup;
  //loading = false;
  submitted = false;
  returnUrl : String;
  private subscription: Subscription;
  message: any;
 
  constructor(private _userService: UserService,private formBuilder : FormBuilder,
    private route : ActivatedRoute,
    private router :Router,
    private alertService: AlertService) {
  }
  ngOnInit() {
    this.user = {
      username: '',
      password: ''
    };
    this.loginForm = this.formBuilder.group({
      username :[null, [Validators.required]],
      password :[null,[Validators.required]],

    });
    this.returnUrl = this.route.snapshot.queryParams['route'] || '/';

    this.subscription = this.alertService.getAlert()
    .subscribe(message => {
        switch (message && message.type) {
            case 'success':
                message.cssClass = 'alert alert-success';
                break;
            case 'error':
                message.cssClass = 'alert alert-danger';
                break;
        }

        this.message = message;
    });






  }
  get f(){
    return this.loginForm.controls;
  }
  onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
           console.log('submitted.value',this.loginForm.value);
      
         
  }
  
 
  login() {
 
    this._userService.login({'username': this.loginForm.value.username, 'password': this.loginForm.value.password});
    
  }
 
  refreshToken() {
    this._userService.refreshToken();
  }
 
  logout() {
    this._userService.logout();
  }
 



ngOnDestroy() {
    this.subscription.unsubscribe();
}
}
