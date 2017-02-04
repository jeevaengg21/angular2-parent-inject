import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildComponent } from './child.component';

const routes: Routes = [
    { path: '', component: ChildComponent }
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes);