import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot, CanLoad, Route
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url: string): boolean {
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        if (this.authService.checkisloggedin()) 
        { 
            return true; 
        }

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }


    canLoad(route: Route): boolean {
        let url: string = route.path;
        console.log('Url:' + url);
        return this.checkLogin(url);
        //if (this.authService.checkisloggedin()) {
        //    return true;
        //} else {
        //    this.router.navigate(['/login']);
        //}
        ////this.authService.redirectUrl=url;
        //// this.router.navigate([this.authService.redirectUrl]);
        //return false;
    }

}

//@Injectable()
//export class AuthGuardService implements CanLoad {
//    constructor(private authService: AuthService, private router: Router) {
//        console.log('entered canload')
//    }
   
//} 