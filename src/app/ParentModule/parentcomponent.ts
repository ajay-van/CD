import { Component, Input, OnInit }  from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, CanLoad, Route, CanActivateChild
} from '@angular/router';

@Component({
    template: `<h2>ParentComponent....</h2>`
})
export class ParentComponent   {

  constructor( private router: Router) {  }

  ngOnInit(){
 
  }
}


