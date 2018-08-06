import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import {LoginComponent} from './login.component'
const appRoutes: Routes = [
 
    {
        path:'login',component:LoginComponent
    }
   
];

@NgModule({
    imports: [
        RouterModule.forChild(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AuthRoutingModule { }
