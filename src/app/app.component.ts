import { Component, OnInit, forwardRef, ViewChild, ViewChildren } from '@angular/core';
import { RouterModule, Routes, Router, NavigationError, RoutesRecognized } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { MainService } from './app.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { IChild } from './child/ichild';
import { BrowserModule } from '@angular/platform-browser'; 

export let parentProvider = {
  provide: AppComponent,
  useExisting: forwardRef(function () { return AppComponent; })
};


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [parentProvider],
})
export class AppComponent implements OnInit {


  count: number = 0;
  title = 'app works!';
  routejson: string = '[{"path":"","loadChildren":"app/login/login.lazy.module#LazyModule"},{"path":"home","loadChildren":"app/child/child.lazy.module#LazyModule"}]';
  appRoutes: Routes;
  newroutejson: string;
  navierror: NavigationError;
  loginsuccesfull: boolean = false;
  anychild: IChild;

  constructor(private router: Router, private mainservice: MainService) {
    // this.resetRouteToLogin();
  }

  public resetRouteToLogin() {

    this.router.resetConfig([
      { path: '', loadChildren: "app/login/login.lazy.module#LazyModule" }]);

  }

  ngOnInit() {
    //this.loadStaticRoute();
    //this.loadStaticRouteFromString();
    console.log('Initail Route >>>>');
    console.log(JSON.stringify(this.router.config));
    this.manageRouteEvent();
  }

  public manageRouteEvent() {
    this.router.events
      .subscribe((event) => {
        // example: NavigationStart, RoutesRecognized, NavigationEnd
        console.log(event);
        if (event instanceof NavigationError) {
          this.navierror = event;
          console.log('navi error' + this.navierror.url);
          if (this.navierror.url != "/") {
            alert('Module ' + this.navierror.url + " not found ")
          }
        } else if (event instanceof RoutesRecognized) {
          console.log('valid path >> ' + event.urlAfterRedirects);
        }
      }, err => console.log("Navigation error >>>" + err));
  }

  public loadStaticRoute() {

    this.router.resetConfig([
      { path: '', loadChildren: "app/login/login.lazy.module#LazyModule" },
      { path: 'home', loadChildren: "app/child/child.lazy.module#LazyModule" }]);

  }

  public loadStaticRouteFromString() {

    this.appRoutes = JSON.parse(this.routejson);
    this.router.resetConfig(this.appRoutes);
    console.log('test>>>>');
    console.log(JSON.stringify(this.appRoutes));
  }



  public home() {
    this.router.navigate(['/home']);
  }

  public login() {
    this.loadDynamicRoute();
    this.router.navigate(['/']);
  }

  public lazychild() {
    this.router.navigate(['/child']);
  }

  public logout() {
    this.router.resetConfig([
      { path: '', loadChildren: "app/login/login.lazy.module#LazyModule" },
    ]);
    this.router.navigate(['/']);
  }

  public opendialog(anychildinstance: IChild): IChild {
    this.count = this.count + 1;
    this.anychild = anychildinstance;
    console.log(this.count + ' >> call from child >> ' + anychildinstance);
    this.anychild.getTest();
    return anychildinstance;
  }



  public replyChild() {
    this.count = this.count + 1;
    console.log(this.count + ' >> ' + this.anychild);
    //this.anychild.setTest("hi there");
  }

  public loadDynamicRoute() {
    this.mainservice.getRoute()
      .subscribe(
      allroutes => {
        this.newroutejson = JSON.stringify(allroutes);
        console.log(this.newroutejson);
        this.appRoutes = JSON.parse(this.newroutejson);
        this.router.resetConfig(this.appRoutes);
        this.router.navigate(['']);
        this.loginsuccesfull = true;
      },
      err => { console.log(err); }
      );
  }
}


