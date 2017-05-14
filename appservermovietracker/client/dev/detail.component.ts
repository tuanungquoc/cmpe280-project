import {RouteParams, Router} from 'angular2/router';
import {Component, OnInit} from 'angular2/core';
import {ShowsService} from "./show.service";
import {DatePipe} from "./date.pipe";

@Component({
    selector: 'detail',
    template: `
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-body">
                    <div class="media">
                        <div class="pull-left">
                            <img class="media-object img-rounded" [src]="show.poster">
                            <div class="text-center" ng-if="currentUser">
                                <div ng-show="!isSubscribed()">
                                    <button (click)="subscribe()" class="btn btn-block btn-success">
                                        <span class="glyphicon glyphicon-plus"></span> Subscribe
                                    </button>
                                </div>
                                <!--<div ng-show="isSubscribed()">-->
                                    <!--<button ng-click="unsubscribe()" class="btn btn-block btn-danger">-->
                                        <!--<span class="glyphicon glyphicon-minus"></span> Unsubscribe-->
                                    <!--</button>-->
                                <!--</div>-->
                            </div>
                            <div class="text-center" >
                                <div class="btn btn-block btn-primary" (click)="onLogin()">Login to Subscribe</div>
                            </div>
                        </div>
                        <div class="media-body">
                            <h2 class="media-heading">
                                {{show.name}}
                                <span class="pull-right text-danger">{{show.rating}}</span>
                            </h2>
                            <h4 ng-show="show.status === 'Continuing'">
                                <span class="glyphicon glyphicon-calendar text-danger"></span>
                                {{show.airsDayOfWeek}} <em>{{show.airsTime}}</em> on
                                {{show.network}}
                            </h4>
                            <h4 ng-show="show.status === 'Ended'">
                                Status: <span class="text-danger">Ended</span>
                            </h4>
                            <p>{{show.overview}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="alert alert-info" *ngIf="firstAired!=null">
                The next episode starts {{firstAired}}
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <span class="glyphicon glyphicon-play"></span> Episodes
                </div>
                <div class="panel-body">
                    <div class="episode" *ngFor="#episode of show.episodes">
                        <h4>{{episode.episodeName}}
                            <small>Season {{episode.season}}, Episode {{episode.episodeNumber}}</small>
                        </h4>
                        <p>
                            <span class="glyphicon glyphicon-calendar"></span>
                            {{episode.firstAired | dateFormat }}
                        </p>
                        <p>{{episode.overview}}</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    providers: [ShowsService],
    pipes: [DatePipe],
    styleUrls: ['../src/stylesheets/css/app.css']
})



export class DetailComponent implements OnInit {

    private show = {};
    public nextEspisode = {firstAired:''};
    public firstAired: Date = null;
    constructor(private _showService:ShowsService, private _routeParems:RouteParams,private _router:Router){}

    ngOnInit():any{
        this._showService.getShowById(this._routeParems.get("id")).subscribe(
          data => {this.show = data,
              this.nextEspisode = this.show.episodes.filter(function(episode){
                  return new Date(episode.firstAired) > new Date();
              })[0],
              this.firstAired = new Date(this.nextEspisode.firstAired)

          },

          error => alert(error),
            () => console.log("Finished")
        );
    }

    onLogin(){
        this._router.navigate(['Login']);
    }
}
