import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*
const appRoutes: Routes = [
  { path: '', loadChildren: "app/login/login.lazy.module#LazyModule" },
  { path: 'home', component: HomeComponent },
  {
    path: 'home', component: HomeComponent,
    children: [{ path: 'child', loadChildren: "app/child/child.lazy.module#LazyModule", outlet: 'mainoutlet' }]
  }
];
*/

const appRoutes: Routes = [
    { path: '', redirectTo: '/child', pathMatch: 'full' },
    { path: '', loadChildren: "app/login/login.lazy.module#LazyModule" },
    { path: 'home', loadChildren: "app/home/home.lazy.module#LazyModule" },
    { path: 'child', loadChildren: "app/child/child.lazy.module#LazyModule" },
    { path: 'child2', loadChildren: "app/child2/child2.lazy.module#Child2Module" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
