import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import{ParentRoutingModule} from './parent.routing'
import {ParentComponent} from './parentcomponent'
import {loadcomponent} from './module.load'
import {docomponent} from './doit'
import {didcomponent} from './didit'
@NgModule({
  declarations: [ParentComponent,loadcomponent,docomponent,didcomponent],
  imports: [ParentRoutingModule],
  providers: [],
  bootstrap: [loadcomponent]
})
export class ParentModule { }
