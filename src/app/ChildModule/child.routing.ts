import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import {ChildComponent} from './childcomponent'
const appRoutes: Routes = [
    {
        path:'',redirectTo:'child',pathMatch: 'full'
    },
    {
        path:'child',component:ChildComponent
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
export class ChildRoutingModule { }
