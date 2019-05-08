
import 'hammerjs';
import{DataService} from './htmldataservice';
import{HtmlModel} from './model';
import {QuestionControlService} from './dynamicform.controlservice';
import{FormGroup} from'@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data:HtmlModel<any>[]
  title = 'app';
constructor(private ds:DataService){
 //this.data= this.ds.getQuestions()
}
}
