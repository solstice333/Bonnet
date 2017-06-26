import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Item } from './item';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

interface Idable {
    id: number;
}

interface Nameable {
    name: string;
}

@Injectable()
export class BackendService {
    private url = 'api/items';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    private _getSearchUrl(term: string): string {
        return `app/items/?name=${term}`;
    }
    
    getAll(type: new (id: number, name: string)=>any): Promise<any[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(resp => resp.json().data as any[]);
    }

    get(type: new (id: number, name: string)=>any, id: number): Promise<any> {
        return this.http.get(`${this.url}/${id}`)
            .toPromise()
            .then(resp => resp.json().data as any);
    } 
    
    update(item: Idable): Promise<Idable> {
        return this.http
            .put(`${this.url}/${item.id}`, 
                JSON.stringify(item), {headers: this.headers})
            .toPromise()
            .then(() => item);
    }

    create(name: string): Promise<Idable & Nameable> {
        return this.http
            .post(this.url, 
                JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(resp => resp.json().data);
    }

    delete(id: number): Promise<null> {
        return this.http.delete(`${this.url}/${id}`, {headers: this.headers})
            .toPromise()
            .then(() => null);
    }

    search(term: string): Observable<Nameable[]> {
        return this.http.get(this._getSearchUrl(term))
            .map(resp => resp.json().data as Nameable[]);
    }
}
