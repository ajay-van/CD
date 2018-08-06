import { Component, Input, OnInit }  from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, CanLoad, Route, CanActivateChild
} from '@angular/router';

@Component({
    template: `<h2>ChildComponent....</h2>`
})
export class ChildComponent   {

  constructor( private router: Router) {  }

  ngOnInit(){
 
  }
}


