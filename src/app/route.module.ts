import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import{routeone} from './route1';
import{routetwo} from './route2';
import{routethree} from './route3';
import {AuthGuard} from './AuthModule/authorisation.service'
import {AppComponent} from './app.component'
import {homecomponent} from './homepage'

const appRoutes: Routes = [
    {
    path :'test',
    component: AppComponent
   },
    {
    path: 'route1', component: routeone
    },
    {
    path: 'route2', component: routetwo
    },
    {
    path:'route3',component:routethree
    },
    {
    path :'',
    loadChildren:'src/app/ParentModule/parent.module#ParentModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,{ useHash: true,}
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }
