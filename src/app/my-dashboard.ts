import { Component, Input, OnInit }  from '@angular/core';
import {MatMenu,MatSnackBar} from '@angular/material';
import{DataService} from './htmldataservice';
import { ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import {Expense,Employee} from './model'

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
public type:string;
 @ViewChild('gmap') gmapElement: any;
 map: google.maps.Map;
 marker:google.maps.Marker;

constructor(public serv:DataService){
  this.bhi="Details";
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
