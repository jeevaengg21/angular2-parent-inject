import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Child2Component } from './child2.component';

const routes: Routes = [
    { path: '', component: Child2Component }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);