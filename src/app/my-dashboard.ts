import {Component,OnInit,AfterViewInit,OnDestroy,Input,TemplateRef} from '@angular/core';
import {MatMenu,MatSnackBar} from '@angular/material';
import{DataService} from './htmldataservice';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import {Expense,Employee} from './model';
import { HttpClientModule, HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

/**
 * @title Nested menu
 */
@Component({
  selector: 'nested-menu-example',
  styles : [
    `form {
      padding : 30px;
    }`
  ],
  templateUrl: 'nested-menu-example.html'
})
export class NestedMenuExample implements OnInit{
 data:any={};
 keys:Array<string>=[];
 tiles:any;
 namecan:string;
 bhi:string;
 filldata:Array<any>=[];
 public Employee:Employee[];
 public latitude:number;
 public longitude:number;
 public expenses: Expense[];
 public testdata:Array<any>;
 public headers:Array<any>=[];
 public datatest:string;

public type:string;
 @ViewChild('gmap') gmapElement: any;
 map: google.maps.Map;
 marker:google.maps.Marker;
 @Input() templateRef: TemplateRef<any>;

constructor(public serv:DataService,public http:HttpClient){
  this.datatest='testRo'
  this.bhi="Details";
  this.testdata=[
    {
        "attributeType": 'BOB',
        "children": null,
        "errorMessage": null,
        "hasChildren": false,
        "input": "0",
        "isRoot": false,
        "items": null,
        "output": null,
        "parentName": "Policy",
        "sourceType": null,
        "type": "factor",
        "value": null,
        "Description": null,
        "DisplayName": null,
        "ID": 0,
        "IsDirty": false,
        "IsNew": false,
        "Name": "ShortRateIndicator",
        "ToDelete": false
    },
    {
        "attributeType": 'SBI',
        "children": null,
        "errorMessage": null,
        "hasChildren": false,
        "input": "0",
        "isRoot": false,
        "items": null,
        "output": null,
        "parentName": "Policy1",
        "sourceType": null,
        "type": "factor",
        "value": null,
        "Description": null,
        "DisplayName": null,
        "ID": 0,
        "IsDirty": false,
        "IsNew": false,
        "Name": "ChangeEffectivePeriod",
        "ToDelete": false
    },
    {
        "attributeType": 'SEBI',
        "children": null,
        "errorMessage": null,
        "hasChildren": false,
        "input": "1",
        "isRoot": false,
        "items": null,
        "output": null,
        "parentName": "Policy2",
        "sourceType": null,
        "type": "factor",
        "value": null,
        "Description": null,
        "DisplayName": null,
        "ID": 0,
        "IsDirty": false,
        "IsNew": false,
        "Name": "PolicyEffectivePeriod",
        "ToDelete": false
    },
    {
        "attributeType": 'BOB2',
        "children": null,
        "errorMessage": null,
        "hasChildren": false,
        "input": "0",
        "isRoot": false,
        "items": null,
        "output": null,
        "parentName": "Policy3",
        "sourceType": null,
        "type": "factor",
        "value": null,
        "Description": null,
        "DisplayName": null,
        "ID": 0,
        "IsDirty": false,
        "IsNew": false,
        "Name": "ShortRateIndicator",
        "ToDelete": false
    },
    {
        "attributeType": 'SEBI2',
        "children": null,
        "errorMessage": null,
        "hasChildren": false,
        "input": "1",
        "isRoot": false,
        "items": null,
        "output": null,
        "parentName": "Policy4",
        "sourceType": null,
        "type": "factor",
        "value": null,
        "Description": null,
        "DisplayName": null,
        "ID": 0,
        "IsDirty": false,
        "IsNew": false,
        "Name": "PolicyEffectivePeriod",
        "ToDelete": false
    }
    ];
    for(var i =0;i<this.testdata.length;i++)
      {
     this.headers.push(this.testdata[i].attributeType)
      }
      this.headers = this.headers.filter((el, i, a) => i === a.indexOf(el))
    console.log(this.headers);
}
delete(name:any){
  let index = this.testdata.indexOf(name);
this.testdata.splice(index,1);
}
ngOnInit(){
  this.expenses = this.serv.getExpenses();
this.getEmployeeDetails();
// var mapProp = {
//   center: new google.maps.LatLng(17.4401, 78.3489),
//   zoom: 15,
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// };
// this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

//this.getdetails();
}
datahttp(): Promise<any>{
 return  this.http.get('config/serverconfig.json') .toPromise()
  .then(data =>{console.log(data)})
  .catch(err => console.log("Server configuration not found."));
}

setCenter(e:any){
  e.preventDefault();
  console.log(e);
  var mapProp = {
    center: new google.maps.LatLng(this.latitude, this.longitude),
    zoom: 10,
    mapTypeId:this.type=='ROADMAP'?google.maps.MapTypeId.ROADMAP:(this.type=='SATELLITE'?google.maps.MapTypeId.SATELLITE:(this.type=='TERRAIN'?google.maps.MapTypeId.TERRAIN:(this.type=='HYBRID'?google.maps.MapTypeId.HYBRID:null)))
  };
  this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  this.marker = new google.maps.Marker({
    position: mapProp.center,
    map: this.map,
    title: 'Got you!'
  });
  

}

getEmployeeDetails(){
 this.serv.getEmployee();
}

getname(){
  return this.namecan=this.serv.getname();
}
getdetails(){
 // this.filldata=this.serv.getdetails();
}

}


@Component({
  selector: 'app',
  template: `
    <h1>Angular's content projection and lifecycle example</h1>
    <app-content>
      <app-nested-component></app-nested-component>
    </app-content>
  `,
})
export class App {}
@Component({
  selector: 'app-content',
  template: `
    <button (click)="display = !display">Toggle content</button>
    <ng-content *ngIf="display"></ng-content>
  `,
})
export class Content {
  display = false;
}
@Component({
  selector: 'app-nested-component',
  template: `
    <b>Hello World!</b>
  `,
})
export class NestedComponent implements OnDestroy, OnInit {
  
  ngOnInit() {
    alert('app-nested-component initialized!');
  }
  
  ngOnDestroy() {
    alert('app-nested-component destroyed!');
  }
  
}
