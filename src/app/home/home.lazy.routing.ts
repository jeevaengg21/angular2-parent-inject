import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: '', component: HomeComponent,
        children: [{ path: 'child', loadChildren: "app/child/child.lazy.module#LazyModule", outlet: 'mainoutlet' }]
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);