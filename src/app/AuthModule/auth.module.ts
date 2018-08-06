import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {LoginComponent} from './login.component';
import {AuthGuard} from './authorisation.service';
import {AuthService} from './auth.service';
import {AuthRoutingModule} from './auth.routing'

@NgModule({
  declarations: [LoginComponent],
  imports: [AuthRoutingModule],
  providers: [AuthGuard,AuthService],
  bootstrap: []
})
export class AuthModule { }
