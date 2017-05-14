System.register(['angular2/router', 'angular2/core', "./show.service", "./date.pipe"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, show_service_1, date_pipe_1;
    var DetailComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (show_service_1_1) {
                show_service_1 = show_service_1_1;
            },
            function (date_pipe_1_1) {
                date_pipe_1 = date_pipe_1_1;
            }],
        execute: function() {
            let DetailComponent = class DetailComponent {
                constructor(_showService, _routeParems, _router) {
                    this._showService = _showService;
                    this._routeParems = _routeParems;
                    this._router = _router;
                    this.show = {};
                    this.nextEspisode = { firstAired: '' };
                    this.firstAired = null;
                }
                ngOnInit() {
                    this._showService.getShowById(this._routeParems.get("id")).subscribe(data => {
                        this.show = data,
                            this.nextEspisode = this.show.episodes.filter(function (episode) {
                                return new Date(episode.firstAired) > new Date();
                            })[0],
                            this.firstAired = new Date(this.nextEspisode.firstAired);
                    }, error => alert(error), () => console.log("Finished"));
                }
                onLogin() {
                    this._router.navigate(['Login']);
                }
            };
            DetailComponent = __decorate([
                core_1.Component({
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
                    providers: [show_service_1.ShowsService],
                    pipes: [date_pipe_1.DatePipe],
                    styleUrls: ['../src/stylesheets/css/app.css']
                }), 
                __metadata('design:paramtypes', [show_service_1.ShowsService, router_1.RouteParams, router_1.Router])
            ], DetailComponent);
            exports_1("DetailComponent", DetailComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUErRUE7Z0JBS0ksWUFBb0IsWUFBeUIsRUFBVSxZQUF3QixFQUFTLE9BQWM7b0JBQWxGLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFZO29CQUFTLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBSDlGLFNBQUksR0FBRyxFQUFFLENBQUM7b0JBQ1gsaUJBQVksR0FBRyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsQ0FBQztvQkFDL0IsZUFBVSxHQUFTLElBQUksQ0FBQztnQkFDeUUsQ0FBQztnQkFFekcsUUFBUTtvQkFDSixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FDbEUsSUFBSTt3QkFBSyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7NEJBQ3JCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVMsT0FBTztnQ0FDMUQsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDOzRCQUNyRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBO29CQUU1RCxDQUFDLEVBRUQsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDbkIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUNoQyxDQUFDO2dCQUNOLENBQUM7Z0JBRUQsT0FBTztvQkFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLENBQUM7WUFDTCxDQUFDO1lBbkdEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdFVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBWSxDQUFDO29CQUN6QixLQUFLLEVBQUUsQ0FBQyxvQkFBUSxDQUFDO29CQUNqQixTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDaEQsQ0FBQzs7K0JBQUE7WUFJRiw2Q0F5QkMsQ0FBQSIsImZpbGUiOiJkZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVyfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Nob3dzU2VydmljZX0gZnJvbSBcIi4vc2hvdy5zZXJ2aWNlXCI7XG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tIFwiLi9kYXRlLnBpcGVcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkZXRhaWwnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1lZGlhLW9iamVjdCBpbWctcm91bmRlZFwiIFtzcmNdPVwic2hvdy5wb3N0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXJcIiBuZy1pZj1cImN1cnJlbnRVc2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgbmctc2hvdz1cIiFpc1N1YnNjcmliZWQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwic3Vic2NyaWJlKClcIiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiPjwvc3Bhbj4gU3Vic2NyaWJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IG5nLXNob3c9XCJpc1N1YnNjcmliZWQoKVwiPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxidXR0b24gbmctY2xpY2s9XCJ1bnN1YnNjcmliZSgpXCIgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1kYW5nZXJcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW1pbnVzXCI+PC9zcGFuPiBVbnN1YnNjcmliZS0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvbkxvZ2luKClcIj5Mb2dpbiB0byBTdWJzY3JpYmU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJtZWRpYS1oZWFkaW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2hvdy5uYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwdWxsLXJpZ2h0IHRleHQtZGFuZ2VyXCI+e3tzaG93LnJhdGluZ319PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IG5nLXNob3c9XCJzaG93LnN0YXR1cyA9PT0gJ0NvbnRpbnVpbmcnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jYWxlbmRhciB0ZXh0LWRhbmdlclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tzaG93LmFpcnNEYXlPZldlZWt9fSA8ZW0+e3tzaG93LmFpcnNUaW1lfX08L2VtPiBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Nob3cubmV0d29ya319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgbmctc2hvdz1cInNob3cuc3RhdHVzID09PSAnRW5kZWQnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0YXR1czogPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPkVuZGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3tzaG93Lm92ZXJ2aWV3fX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWluZm9cIiAqbmdJZj1cImZpcnN0QWlyZWQhPW51bGxcIj5cbiAgICAgICAgICAgICAgICBUaGUgbmV4dCBlcGlzb2RlIHN0YXJ0cyB7e2ZpcnN0QWlyZWR9fVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXBsYXlcIj48L3NwYW4+IEVwaXNvZGVzXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVwaXNvZGVcIiAqbmdGb3I9XCIjZXBpc29kZSBvZiBzaG93LmVwaXNvZGVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQ+e3tlcGlzb2RlLmVwaXNvZGVOYW1lfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+U2Vhc29uIHt7ZXBpc29kZS5zZWFzb259fSwgRXBpc29kZSB7e2VwaXNvZGUuZXBpc29kZU51bWJlcn19PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2FsZW5kYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlcGlzb2RlLmZpcnN0QWlyZWQgfCBkYXRlRm9ybWF0IH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57e2VwaXNvZGUub3ZlcnZpZXd9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtTaG93c1NlcnZpY2VdLFxuICAgIHBpcGVzOiBbRGF0ZVBpcGVdLFxuICAgIHN0eWxlVXJsczogWycuLi9zcmMvc3R5bGVzaGVldHMvY3NzL2FwcC5jc3MnXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJpdmF0ZSBzaG93ID0ge307XG4gICAgcHVibGljIG5leHRFc3Bpc29kZSA9IHtmaXJzdEFpcmVkOicnfTtcbiAgICBwdWJsaWMgZmlyc3RBaXJlZDogRGF0ZSA9IG51bGw7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvd1NlcnZpY2U6U2hvd3NTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZVBhcmVtczpSb3V0ZVBhcmFtcyxwcml2YXRlIF9yb3V0ZXI6Um91dGVyKXt9XG5cbiAgICBuZ09uSW5pdCgpOmFueXtcbiAgICAgICAgdGhpcy5fc2hvd1NlcnZpY2UuZ2V0U2hvd0J5SWQodGhpcy5fcm91dGVQYXJlbXMuZ2V0KFwiaWRcIikpLnN1YnNjcmliZShcbiAgICAgICAgICBkYXRhID0+IHt0aGlzLnNob3cgPSBkYXRhLFxuICAgICAgICAgICAgICB0aGlzLm5leHRFc3Bpc29kZSA9IHRoaXMuc2hvdy5lcGlzb2Rlcy5maWx0ZXIoZnVuY3Rpb24oZXBpc29kZSl7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZXBpc29kZS5maXJzdEFpcmVkKSA+IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgIH0pWzBdLFxuICAgICAgICAgICAgICB0aGlzLmZpcnN0QWlyZWQgPSBuZXcgRGF0ZSh0aGlzLm5leHRFc3Bpc29kZS5maXJzdEFpcmVkKVxuXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIGVycm9yID0+IGFsZXJ0KGVycm9yKSxcbiAgICAgICAgICAgICgpID0+IGNvbnNvbGUubG9nKFwiRmluaXNoZWRcIilcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkxvZ2luKCl7XG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0xvZ2luJ10pO1xuICAgIH1cbn1cbiJdfQ==
