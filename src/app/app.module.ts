import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import{childtestComponent} from './childtest.component';
import{childtestComponent2} from './child2.component';
import {MatButtonModule, MatCheckboxModule,MatMenuModule, MatFormFieldModule,MatInputModule,MatCardModule,MatSidenavModule,MatGridListModule,MatSelectModule,MatSlideToggleModule,MatDividerModule,MatExpansionModule,MatTabsModule,MatSnackBarModule,MatSliderModule} from '@angular/material';
import {NestedMenuExample,App,Content,NestedComponent} from './my-dashboard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import{DynamicFormComponent} from'./dynamicform.component';
import{DataService} from './htmldataservice';
import{QuestionControlService}from './dynamicform.controlservice';
import{DynFormComponent} from './dyn.form.component';
import{ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import{routeone} from './route1'
import {routetwo} from './route2'
import {routethree} from './route3'
import {AppRoutingModule} from './route.module'
import {AuthModule} from './AuthModule/auth.module'
import {homecomponent} from './homepage'
import {ParentModule} from './ParentModule/parent.module'
import {ChildModule} from './ChildModule/child.module'
@NgModule({
  declarations: [
    homecomponent,AppComponent,routethree,NestedMenuExample,DynamicFormComponent,DynFormComponent,App,Content,NestedComponent,childtestComponent,childtestComponent2,routeone,routetwo
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSidenavModule,
    MatGridListModule,
    MatSelectModule,MatSlideToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSliderModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    ReactiveFormsModule,
    FormsModule ,HttpClientModule,
    AppRoutingModule,
    AuthModule,
    ParentModule,
    ChildModule
  ],
  providers: [DataService,QuestionControlService],
  bootstrap: [homecomponent]
})
export class AppModule { }
