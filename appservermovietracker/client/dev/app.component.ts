import { RouteConfig, ROUTER_DIRECTIVES, RouterLink, RouterOutlet } from 'angular2/router';
import {Component} from 'angular2/core';
import { AddComponent } from "./add.component";
import { LoginComponent } from "./login.component";
import { SignUpComponent } from "./signup.component";
import { HomeComponent } from "./home.component";
import { DetailComponent } from "./detail.component";
@Component({
    selector: 'my-app',
    template: `
        <header>
            <div class="navbar navbar-default navbar-static-top" role="navigation" bs-navbar>
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">
                    <span class="glyphicon glyphicon-film"></span>
                    Show<strong>Trackr</strong></a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['Home']">Home</a></li>
                    <li><a [routerLink]="['Add']">Add</a></li>
                </ul>
                <ul class="nav navbar-nav pull-right">
                    <li><a [routerLink]="['Login']">Login</a></li>
                    <li><a [routerLink]="['SignUp']">Sign up</a></li>
                </ul>
                <ul class="nav navbar-nav pull-right">
                    <li class="navbar-text"></li>
                    <li><a href="javascript:void(0)">Logout</a></li>
                </ul>
            </div>
        </header>
        <div class='main'>
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['../src/stylesheets/css/app.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/',name: 'Home', component: HomeComponent,useAsDefault: true},
    {path: '/add',name: 'Add', component: AddComponent},
    {path: '/login',name: 'Login', component: LoginComponent},
    {path: '/signup',name: 'SignUp', component: SignUpComponent},
    {path: '/shows/:id',name: 'Detail', component: DetailComponent}

])

export class AppComponent {

}
