import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { routing } from './login.lazy.routing';

@NgModule({
  imports: [routing],
  declarations: [LoginComponent]
})
export class LazyModule { }