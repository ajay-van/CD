import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import {ChildComponent} from './childcomponent'
import {ChildRoutingModule} from './child.routing'
@NgModule({
  declarations: [ChildComponent],
  imports: [ChildRoutingModule],
  providers: [],
  bootstrap: []
})
export class ChildModule { }
