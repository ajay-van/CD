import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule,MatMenuModule, MatFormFieldModule,MatInputModule,MatCardModule,MatSidenavModule,MatGridListModule,MatSelectModule,MatSlideToggleModule,MatDividerModule,MatExpansionModule,MatTabsModule,MatSnackBarModule,MatSliderModule} from '@angular/material';
import {NestedMenuExample} from './my-dashboard';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import{DynamicFormComponent} from'./dynamicform.component';
import{DataService} from './htmldataservice';
import{QuestionControlService}from './dynamicform.controlservice';
import{DynFormComponent} from './dyn.form.component';
import{ReactiveFormsModule,FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,NestedMenuExample,DynamicFormComponent,DynFormComponent
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
    FormsModule ,HttpClientModule
  ],
  
  providers: [DataService,QuestionControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
