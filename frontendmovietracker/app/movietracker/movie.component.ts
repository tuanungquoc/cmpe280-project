import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {ShowsService} from "../_services/show.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    templateUrl: 'movie.component.html',
    styleUrls: ['../stylesheets/css/app.css']
})

export class MovieComponent implements OnInit {
    currentUser: User;

    public headingTitle = 'Top 12 Shows';
    public shows: Object[] = [];
    public query = { name : ''};

    public alphabet: string[] = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z'];

    public genres: string[] = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
        'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
        'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
        'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
        'Travel'];

    // constructor(private _showService:ShowsService,private _router:Router){}

    onFilterByAlphabet(char:string){
        this.headingTitle = char;
        this._showService.getShowsByAlphabet(char).subscribe(
            data => this.shows = data,
            error => alert(error),
            () => console.log('Finished')
        );
    }

    onFilterByGenre(genre: string){
        this.headingTitle = genre;
        this._showService.getShowsByGenre(genre).subscribe(
            data => this.shows = data,
            error => alert(error),
            () => console.log('Finished')
        );
    }

    constructor(private userService: UserService, private _showService:ShowsService, private _router:Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {

    }

}