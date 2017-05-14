import {Injectable} from 'angular2/core';
import {Headers, Http} from "angular2/http";
import "rxjs/add/operator/map";

@Injectable()

export class ShowsService{
    constructor(private _http:Http){}
    public isLogin = false;

    getShowsByGenre(genre:string) {
        return this._http.get("/api/shows?genre="+genre).map(res => res.json());
    }
    getShowsByAlphabet(char:string){
        return this._http.get("/api/shows?alphabet="+char).map(res => res.json());
    }
    addShow(showName:string){
        var param = 'showName='+showName;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post("/api/shows",param,{headers:headers}).map(res =>res);
    }

    getShowById(id:string){
        return this._http.get("/api/shows/"+id).map(res => res.json());
    }

    login(email:string, password:string){
        var param = 'email='+email+'&password='+password;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post("/logIn",param,{headers:headers}).map(res => res);
    }
}
