System.register(['angular2/router', 'angular2/core', "./add.component", "./login.component", "./signup.component", "./home.component", "./detail.component"], function(exports_1, context_1) {
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
    var router_1, core_1, add_component_1, login_component_1, signup_component_1, home_component_1, detail_component_1;
    var AppComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (add_component_1_1) {
                add_component_1 = add_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (signup_component_1_1) {
                signup_component_1 = signup_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (detail_component_1_1) {
                detail_component_1 = detail_component_1_1;
            }],
        execute: function() {
            let AppComponent = class AppComponent {
            };
            AppComponent = __decorate([
                core_1.Component({
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
                    directives: [router_1.ROUTER_DIRECTIVES]
                }),
                router_1.RouteConfig([
                    { path: '/', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                    { path: '/add', name: 'Add', component: add_component_1.AddComponent },
                    { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                    { path: '/signup', name: 'SignUp', component: signup_component_1.SignUpComponent },
                    { path: '/shows/:id', name: 'Detail', component: detail_component_1.DetailComponent }
                ]), 
                __metadata('design:paramtypes', [])
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFnREE7WUFFQSxDQUFDO1lBM0NEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXlCVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDN0MsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7aUJBQ2xDLENBQUM7Z0JBRUQsb0JBQVcsQ0FBQztvQkFDVCxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDO29CQUNyRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVksRUFBQztvQkFDbkQsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUM7b0JBQ3pELEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO29CQUM1RCxFQUFDLElBQUksRUFBRSxZQUFZLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztpQkFFbEUsQ0FBQzs7NEJBQUE7WUFFRix1Q0FFQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZUNvbmZpZywgUk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlckxpbmssIFJvdXRlck91dGxldCB9IGZyb20gJ2FuZ3VsYXIyL3JvdXRlcic7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQgeyBBZGRDb21wb25lbnQgfSBmcm9tIFwiLi9hZGQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgU2lnblVwQ29tcG9uZW50IH0gZnJvbSBcIi4vc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL2hvbWUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9kZXRhaWwuY29tcG9uZW50XCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLXN0YXRpYy10b3BcIiByb2xlPVwibmF2aWdhdGlvblwiIGJzLW5hdmJhcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2YmFyLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maWxtXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICBTaG93PHN0cm9uZz5UcmFja3I8L3N0cm9uZz48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnSG9tZSddXCI+SG9tZTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydBZGQnXVwiPkFkZDwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXYgcHVsbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGEgW3JvdXRlckxpbmtdPVwiWydMb2dpbiddXCI+TG9naW48L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIFtyb3V0ZXJMaW5rXT1cIlsnU2lnblVwJ11cIj5TaWduIHVwPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2YmFyLW5hdiBwdWxsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdmJhci10ZXh0XCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj5Mb2dvdXQ8L2E+PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPSdtYWluJz5cbiAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi4vc3JjL3N0eWxlc2hlZXRzL2Nzcy9hcHAuY3NzJ10sXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTXVxufSlcblxuQFJvdXRlQ29uZmlnKFtcbiAgICB7cGF0aDogJy8nLG5hbWU6ICdIb21lJywgY29tcG9uZW50OiBIb21lQ29tcG9uZW50LHVzZUFzRGVmYXVsdDogdHJ1ZX0sXG4gICAge3BhdGg6ICcvYWRkJyxuYW1lOiAnQWRkJywgY29tcG9uZW50OiBBZGRDb21wb25lbnR9LFxuICAgIHtwYXRoOiAnL2xvZ2luJyxuYW1lOiAnTG9naW4nLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcbiAgICB7cGF0aDogJy9zaWdudXAnLG5hbWU6ICdTaWduVXAnLCBjb21wb25lbnQ6IFNpZ25VcENvbXBvbmVudH0sXG4gICAge3BhdGg6ICcvc2hvd3MvOmlkJyxuYW1lOiAnRGV0YWlsJywgY29tcG9uZW50OiBEZXRhaWxDb21wb25lbnR9XG5cbl0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG59XG4iXX0=
