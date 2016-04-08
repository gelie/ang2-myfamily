import {Injectable} from 'angular2/core';
import {Http, Headers, Response} from 'angular2/http';
import 'rxjs/add/operator/map'
import {Configuration} from './configuration';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class PersonService {
    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerApi;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    
    public getAllPeople() {
        return this._http.get(this.actionUrl) //, '', {options: this.headers})
        .map(res => res.json())
        .catch(error => this.handleError(error));
    }
    
    private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}