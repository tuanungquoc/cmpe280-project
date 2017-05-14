import { Router } from 'angular2/router';
import {Component} from 'angular2/core';
import {ShowsService} from "./show.service";

@Component({
    selector: 'add',
    template: `
        <div class="container">
            <div class="panel panel-default">
                <div class="panel-heading">Add TV Show</div>
                <div class="panel-body">
                    <form name="addForm" #myForm="ngForm" (ngSubmit)="onSubmit()"> 
                        <div>
                            <input type="text" name="showName" ngControl="showName" #showName="ngForm" [(ngModel)]="show.showName" placeholder="Enter TV show name" required autofocus>
                            <button class="btn btn-primary" type="submit" [disabled]="!myForm.form.valid">Add</button>
                            <div>{{test}}</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
    providers: [ShowsService],
    styleUrls: ['../src/stylesheets/css/app.css']
})
export class AddComponent {
    public show = {showName :''} ;
    public test = '' ;
    constructor(private _showService:ShowsService){}
    onSubmit(){
        this._showService.addShow(this.show.showName).subscribe(
            data => this.test = 'Success Added',
            error => alert(error),
            () => console.log("Finished")
        );
    }
}
