import { Component, Input, OnInit }  from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, CanLoad, Route, CanActivateChild
} from '@angular/router';

@Component({
    template: `<h2>Routeone</h2>`
})
export class routeone   {

  constructor( private router: Router) {  }

  ngOnInit(){
  this.router.navigate(['route3']);
  }
}


