import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { RouterModule, Routes, Router } from '@angular/router';


@Injectable()
export class MainService {

    constructor(private http: Http) {

    }

    private extractData(res: Response) {
        let body = res.json();
        console.log(JSON.stringify(body));
        return body || {};
    }

    getRoute(): Observable<string> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        let options = new RequestOptions({ headers: headers }); // Create a request option
        return this.http.get('data.json')
            .map(this.extractData)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }

    getjson() {
        return this.http.get('data.json').map(this.extractData);
    }

}