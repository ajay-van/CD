import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import {loadcomponent} from './module.load'
import{docomponent} from './doit'
import {didcomponent} from './didit'

const appRoutes: Routes = [
    {path:'',component:loadcomponent,
    children:[
        {path:'do',component:docomponent},
        {path:'did',component:didcomponent}
    ]
    },
    {
    path :'children',
    loadChildren:'src/app/ChildModule/child.module#ChildModule',
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
export class ParentRoutingModule { }
