import { Router } from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {ShowsService} from "../_services/show.service";
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { AlertService, AuthenticationService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'add.component.html',
    styleUrls: ['../stylesheets/css/app.css']
})

export class AddComponent implements OnInit {
    currentUser: User;

    public show :any = {} ;
    public test = '' ;

    onSubmit(){

        this._showService.addShow(this.show.showName).subscribe(
            data => this._alertService.success("Success"),
            error => this._alertService.error("Cannot add the show"),
            () => console.log("Finished")
        );
    }

    constructor(private userService: UserService, private _showService:ShowsService, private _router:Router,private _alertService:AlertService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit(){

    }
}
