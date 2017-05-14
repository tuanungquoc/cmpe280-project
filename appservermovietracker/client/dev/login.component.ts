import { Router } from 'angular2/router';
import {Component} from 'angular2/core';
import {ShowsService} from "./show.service";

@Component({
    selector: 'login',
    template: `        
        <div class="container">
            <div class="row">
                <div class="center-form panel">
                    <div class="panel-body">
                        <h2 class="text-center">Login</h2>
                        <form #myForm="ngForm" (ngSubmit)="onSubmit()">
                            <div class="form-group">
                                <input class="form-control input-lg" type="text" #email="ngForm" [(ngModel)]="credential.email" placeholder="Email" required autofocus>
                            </div>
                            <div class="form-group">
                                <input class="form-control input-lg" type="password" #password="ngForm" [(ngModel)]="credential.password" placeholder="Password" required>
                            </div>
    
                            <button type="submit" class="btn btn-lg btn-block btn-success" [disabled]="!myForm.form.valid">Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div>{{test}}</div>
    `,
    providers:[ShowsService],
    styleUrls: ['../src/stylesheet  s/css/app.css']

})
export class LoginComponent {
    public credential = {email :'',password:''}
    constructor(private _showService:ShowsService,private _router:Router){}
    public test = '';
    onSubmit(){
        this._showService.login(this.credential.email,this.credential.password).subscribe(
            data => this._router.navigate(['Home']),
            error => alert(error),
            () => console.log("Finished")
        );
    }
}
