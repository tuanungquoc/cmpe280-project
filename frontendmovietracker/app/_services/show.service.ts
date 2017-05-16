/**
 * Created by tuanung on 5/14/17.
 */
import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class ShowsService{
    constructor(private _http:Http){}
    private hostname:string ='https://cmpe280-group7-backend.herokuapp.com';

    getShowsByGenre(genre:string) {
        return this._http.get(this.hostname+"/api/shows?genre="+genre).map(res => res.json());
    }

    getShowsByAlphabet(char:string){
        return this._http.get(this.hostname+"/api/shows?alphabet="+char).map(res => res.json());
    }

    addShow(showName:string){
        var param = 'showName='+showName;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post(this.hostname+"/api/shows",param,{headers:headers}).map(res =>res);
    }

    getShowById(id:string){
        return this._http.get(this.hostname+"/api/shows/"+id).map(res => res.json());
    }

    getTopShows(){
        return this._http.get(this.hostname+"/api/shows").map(res => res.json());
    }
}
