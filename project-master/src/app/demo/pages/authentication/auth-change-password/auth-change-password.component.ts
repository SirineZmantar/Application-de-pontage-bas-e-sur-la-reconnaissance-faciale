import { Component, OnInit } from '@angular/core';
import {FormBuilder, AbstractControl, FormGroup, Validators} from '@angular/forms';
import {PWChangeValidators} from './pw-validators';
import { FormsModule } from '@angular/forms';
import {ChangePassService} from'../auth-change-password/change-pass.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-auth-change-password',
  templateUrl: './auth-change-password.component.html',
  styleUrls: ['./auth-change-password.component.scss'],
  //directives: [REACTIVE_FORM_DIRECTIVES],
})
export class AuthChangePasswordComponent implements OnInit {

  pwChangeForm: FormGroup;
  current: AbstractControl;
  newPW: AbstractControl;
  confirm: AbstractControl;
  loading = false;
  submitted = false;
  returnUrl : String;
  constructor(private fb: FormBuilder,private changepassService: ChangePassService) { }
  ngOnInit() {
    
    
      this.pwChangeForm = this.fb.group({
          current: ['', Validators.required],
          newPW: ['', Validators.required],
          confirm: ['', Validators.required]
      }, {
          // Here we create validators to be used for the group as a whole
          validator: Validators.compose([
              PWChangeValidators.newIsNotOld, 
              PWChangeValidators.newMatchesConfirm
          ])}
      );
      this.current = this.pwChangeForm.controls['current'];
      this.newPW = this.pwChangeForm.controls['newPW'];
      this.confirm = this.pwChangeForm.controls['confirm'];
  }



  onSubmit(){
    this.submitted=true;
    if(this.pwChangeForm.invalid){
      return;
    }
           console.log('submitted.value',this.pwChangeForm.value);
      
         
  }
}
