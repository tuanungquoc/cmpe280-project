import {Component} from 'angular2/core';
import {ShowsService} from "./show.service";
import {Router} from "angular2/router";

@Component({
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
   providers: [ShowsService],
   styleUrls: ['../src/stylesheets/css/app.css'],
})
export class HomeComponent {
    public headingTitle = 'Top 12 Shows';
    public shows =[];
    public query ={ name : ''};

     public alphabet: string[] = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
      'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
      'Y', 'Z'];

    public genres: string[] = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
      'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
      'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
      'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
      'Travel'];
    constructor(private _showService:ShowsService,private _router:Router){}

    onFilterByAlphabet(char){
        this.headingTitle = char;
        this._showService.getShowsByAlphabet(char).subscribe(
            data => this.shows = data,
            error => alert(error),
            () => console.log('Finished')
        );
    }

    onFilterByGenre(genre){
        this.headingTitle = genre;
        this._showService.getShowsByGenre(genre).subscribe(
            data => this.shows = data,
            error => alert(error),
            () => console.log('Finished')
        );
    }

    onDetail(_id){
        var obj = {id: _id}
        this._router.navigate(['Detail',obj]);
    }
}
