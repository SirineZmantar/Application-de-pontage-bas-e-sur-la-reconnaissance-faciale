import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AuthChangePasswordRoutingModule } from './auth-change-password-routing.module';
import { AuthChangePasswordComponent } from './auth-change-password.component';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    AuthChangePasswordRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [AuthChangePasswordComponent]
})
export class AuthChangePasswordModule { }
