System.register(['angular2/core', "./show.service", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, show_service_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (show_service_1_1) {
                show_service_1 = show_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            let HomeComponent = class HomeComponent {
                constructor(_showService, _router) {
                    this._showService = _showService;
                    this._router = _router;
                    this.headingTitle = 'Top 12 Shows';
                    this.shows = [];
                    this.query = { name: '' };
                    this.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
                        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                        'Y', 'Z'];
                    this.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
                        'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
                        'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
                        'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
                        'Travel'];
                }
                onFilterByAlphabet(char) {
                    this.headingTitle = char;
                    this._showService.getShowsByAlphabet(char).subscribe(data => this.shows = data, error => alert(error), () => console.log('Finished'));
                }
                onFilterByGenre(genre) {
                    this.headingTitle = genre;
                    this._showService.getShowsByGenre(genre).subscribe(data => this.shows = data, error => alert(error), () => console.log('Finished'));
                }
                onDetail(_id) {
                    var obj = { id: _id };
                    this._router.navigate(['Detail', obj]);
                }
            };
            HomeComponent = __decorate([
                core_1.Component({
                    selector: 'home',
                    template: `
     <div class="jumbotron">
      <div class="container">
        <ul class="alphabet">
          <li *ngFor="#char of alphabet">
            <span (click)="onFilterByAlphabet(char)">{{char}}</span>
          </li>
        </ul>
        <ul class="genres">
          <li *ngFor="#genre of genres">
            <span (click)="onFilterByGenre(genre)">{{genre}}</span>
          </li>
        </ul>
      </div>
    </div>

     <div class="container">
          <div class="panel panel-default">
            <div class="panel-heading">
              {{headingTitle}}
              <div class="pull-right">
                <input class="search" type="text" [(ngModel)]="query.name" placeholder="Search...">
              </div>
            </div>
          <div class="panel-body">
              <div class="row show-list">
                  {{test}}
                  <div class="col-xs-4 col-md-3" *ngFor="#show of shows">
                      <div (click)="onDetail(show._id)">
                          <img class="img-rounded" [src]="show.poster" width="100%"/>
                      </div>
                      <div class="text-center">
                          <a href="/shows/{{show._id}}">{{show.name}}</a>
                          <p class="text-muted">Episodes: {{show.episodes.length}}</p>
                      </div>
                  </div>
              </div>
          </div>
          </div>
     </div>
    `,
                    providers: [show_service_1.ShowsService],
                    styleUrls: ['../src/stylesheets/css/app.css'],
                }), 
                __metadata('design:paramtypes', [show_service_1.ShowsService, router_1.Router])
            ], HomeComponent);
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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dGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1Nob3dzU2VydmljZX0gZnJvbSBcIi4vc2hvdy5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcImFuZ3VsYXIyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2hvbWUnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPHVsIGNsYXNzPVwiYWxwaGFiZXRcIj5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwiI2NoYXIgb2YgYWxwaGFiZXRcIj5cbiAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJvbkZpbHRlckJ5QWxwaGFiZXQoY2hhcilcIj57e2NoYXJ9fTwvc3Bhbj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3M9XCJnZW5yZXNcIj5cbiAgICAgICAgICA8bGkgKm5nRm9yPVwiI2dlbnJlIG9mIGdlbnJlc1wiPlxuICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cIm9uRmlsdGVyQnlHZW5yZShnZW5yZSlcIj57e2dlbnJlfX08L3NwYW4+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmdcIj5cbiAgICAgICAgICAgICAge3toZWFkaW5nVGl0bGV9fVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInNlYXJjaFwiIHR5cGU9XCJ0ZXh0XCIgWyhuZ01vZGVsKV09XCJxdWVyeS5uYW1lXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHNob3ctbGlzdFwiPlxuICAgICAgICAgICAgICAgICAge3t0ZXN0fX1cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wteHMtNCBjb2wtbWQtM1wiICpuZ0Zvcj1cIiNzaG93IG9mIHNob3dzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiAoY2xpY2spPVwib25EZXRhaWwoc2hvdy5faWQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcm91bmRlZFwiIFtzcmNdPVwic2hvdy5wb3N0ZXJcIiB3aWR0aD1cIjEwMCVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvc2hvd3Mve3tzaG93Ll9pZH19XCI+e3tzaG93Lm5hbWV9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LW11dGVkXCI+RXBpc29kZXM6IHt7c2hvdy5lcGlzb2Rlcy5sZW5ndGh9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgYCxcbiAgIHByb3ZpZGVyczogW1Nob3dzU2VydmljZV0sXG4gICBzdHlsZVVybHM6IFsnLi4vc3JjL3N0eWxlc2hlZXRzL2Nzcy9hcHAuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIHB1YmxpYyBoZWFkaW5nVGl0bGUgPSAnVG9wIDEyIFNob3dzJztcbiAgICBwdWJsaWMgc2hvd3MgPVtdO1xuICAgIHB1YmxpYyBxdWVyeSA9eyBuYW1lIDogJyd9O1xuXG4gICAgIHB1YmxpYyBhbHBoYWJldDogc3RyaW5nW10gPSBbJzAtOScsICdBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJyxcbiAgICAgICdLJywgJ0wnLCAnTScsICdOJywgJ08nLCAnUCcsICdRJywgJ1InLCAnUycsICdUJywgJ1UnLCAnVicsICdXJywgJ1gnLFxuICAgICAgJ1knLCAnWiddO1xuXG4gICAgcHVibGljIGdlbnJlczogc3RyaW5nW10gPSBbJ0FjdGlvbicsICdBZHZlbnR1cmUnLCAnQW5pbWF0aW9uJywgJ0NoaWxkcmVuJywgJ0NvbWVkeScsXG4gICAgICAnQ3JpbWUnLCAnRG9jdW1lbnRhcnknLCAnRHJhbWEnLCAnRmFtaWx5JywgJ0ZhbnRhc3knLCAnRm9vZCcsXG4gICAgICAnSG9tZSBhbmQgR2FyZGVuJywgJ0hvcnJvcicsICdNaW5pLVNlcmllcycsICdNeXN0ZXJ5JywgJ05ld3MnLCAnUmVhbGl0eScsXG4gICAgICAnUm9tYW5jZScsICdTY2ktRmknLCAnU3BvcnQnLCAnU3VzcGVuc2UnLCAnVGFsayBTaG93JywgJ1RocmlsbGVyJyxcbiAgICAgICdUcmF2ZWwnXTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG93U2VydmljZTpTaG93c1NlcnZpY2UscHJpdmF0ZSBfcm91dGVyOlJvdXRlcil7fVxuXG4gICAgb25GaWx0ZXJCeUFscGhhYmV0KGNoYXIpe1xuICAgICAgICB0aGlzLmhlYWRpbmdUaXRsZSA9IGNoYXI7XG4gICAgICAgIHRoaXMuX3Nob3dTZXJ2aWNlLmdldFNob3dzQnlBbHBoYWJldChjaGFyKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMuc2hvd3MgPSBkYXRhLFxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coJ0ZpbmlzaGVkJylcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkZpbHRlckJ5R2VucmUoZ2VucmUpe1xuICAgICAgICB0aGlzLmhlYWRpbmdUaXRsZSA9IGdlbnJlO1xuICAgICAgICB0aGlzLl9zaG93U2VydmljZS5nZXRTaG93c0J5R2VucmUoZ2VucmUpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy5zaG93cyA9IGRhdGEsXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnRmluaXNoZWQnKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uRGV0YWlsKF9pZCl7XG4gICAgICAgIHZhciBvYmogPSB7aWQ6IF9pZH1cbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnRGV0YWlsJyxvYmpdKTtcbiAgICB9XG59XG4iXX0=
