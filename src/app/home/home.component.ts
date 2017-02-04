import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  title = 'Home page';

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('inside HomeComponent');
  }

  child() {
    //this.router.navigate(['/home',{outlet:{mainoutlet:'child'}}]);
    this.router.navigate(['/home', { outlets: { mainoutlet: 'child' } }]);
  }
}
