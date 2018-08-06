import { Component, Input, OnInit }  from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, CanLoad, Route, CanActivateChild
} from '@angular/router';

@Component({
  selector: 'home-round',
    template: `<router-outlet></router-outlet>`
})
export class homecomponent   {

  constructor( private router: Router) {  }

  ngOnInit(){
  //  this.router.navigate(['app']);
  }
}


