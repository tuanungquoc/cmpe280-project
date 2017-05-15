import { Router, ActivatedRoute } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ShowsService} from "../_services/show.service";
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {DatePipe} from "../_services/date.pipe";
import {SubscriptionService} from "../_services/subscription.service";
import {AlertService} from "../_services/alert.service";

@Component({
    moduleId: module.id,
    templateUrl: 'detail.component.html',
    styleUrls: ['../stylesheets/css/app.css']
})

export class DetailComponent implements OnInit {
    currentUser: User;

    private id = '';
    public nextEspisode = {firstAired:''};
    public firstAired: Date = null;
    public show = {episodes:[{firstAired:''}],subscribers:[{email:''}] };

    public isSubscribe = false;
    constructor(private _alertService:AlertService, private userService: UserService, private _subsciptionService:SubscriptionService, private _showService:ShowsService, private _router:Router, private _routeParams:ActivatedRoute) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(){
        this._routeParams.params.subscribe(params => {
            this.id = params['id'];
        });
        this._showService.getShowById(this.id).subscribe(
            data => {
                this.show = data;
                this.nextEspisode = this.show.episodes.filter(function(episode){
                    return new Date(episode.firstAired) > new Date();
                })[0];
                this.firstAired = new Date(this.nextEspisode.firstAired);
                for(var i = 0 ; i<this.show.subscribers.length;i++) {
                    if (this.show.subscribers[i].email === this.currentUser.username)
                        this.isSubscribe = true;
                    break;
                }
            },
            error => alert(error),
            () => console.log("Finished")
        );
    }

    subscribe(){
        this._subsciptionService.subscribe(this.show,this.currentUser.username).subscribe(
            data => this.isSubscribe = true,
            error => this._alertService.error("Fail to subscribe")
        );
    }
    unsubscribe(){
        this._subsciptionService.ubsubscribe(this.show,this.currentUser.username).subscribe(
            data => this.isSubscribe = false,
            error => this._alertService.error("Fail to unsubscribe")
        );

    }
}
