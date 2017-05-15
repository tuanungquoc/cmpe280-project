/**
 * Created by tuanung on 5/14/17.
 */
/**
 * Created by tuanung on 5/14/17.
 */
import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()

export class SubscriptionService{
    constructor(private _http:Http){}

    subscribe(show:any,email:string){
        var param = 'showId='+show._id+"&email="+email;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post("http://localhost:8080/api/subscribe",param,{headers:headers}).map(res =>res);
    }

    ubsubscribe(show:any,email:string){
        var param = 'showId='+show._id+"&email="+email;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post("http://localhost:8080/api/unsubscribe",param,{headers:headers}).map(res =>res);
    }

}
