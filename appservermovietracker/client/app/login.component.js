System.register(['angular2/router', 'angular2/core', "./show.service"], function(exports_1, context_1) {
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
    var router_1, core_1, show_service_1;
    var LoginComponent;
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
            }],
        execute: function() {
            let LoginComponent = class LoginComponent {
                constructor(_showService, _router) {
                    this._showService = _showService;
                    this._router = _router;
                    this.credential = { email: '', password: '' };
                    this.test = '';
                }
                onSubmit() {
                    this._showService.login(this.credential.email, this.credential.password).subscribe(data => this._router.navigate(['Home']), error => alert(error), () => console.log("Finished"));
                }
            };
            LoginComponent = __decorate([
                core_1.Component({
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
                    providers: [show_service_1.ShowsService],
                    styleUrls: ['../src/stylesheet  s/css/app.css']
                }), 
                __metadata('design:paramtypes', [show_service_1.ShowsService, router_1.Router])
            ], LoginComponent);
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWlDQTtnQkFFSSxZQUFvQixZQUF5QixFQUFTLE9BQWM7b0JBQWhELGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUFTLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBRDdELGVBQVUsR0FBRyxFQUFDLEtBQUssRUFBRSxFQUFFLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxDQUFBO29CQUVwQyxTQUFJLEdBQUcsRUFBRSxDQUFDO2dCQURxRCxDQUFDO2dCQUV2RSxRQUFRO29CQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUM3RSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUN2QyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUNyQixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQ2hDLENBQUM7Z0JBQ04sQ0FBQztZQUNMLENBQUM7WUF4Q0Q7Z0JBQUMsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0JUO29CQUNELFNBQVMsRUFBQyxDQUFDLDJCQUFZLENBQUM7b0JBQ3hCLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO2lCQUVsRCxDQUFDOzs4QkFBQTtZQUNGLDJDQVdDLENBQUEiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7U2hvd3NTZXJ2aWNlfSBmcm9tIFwiLi9zaG93LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsb2dpbicsXG4gICAgdGVtcGxhdGU6IGAgICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlci1mb3JtIHBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPkxvZ2luPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtICNteUZvcm09XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBpbnB1dC1sZ1wiIHR5cGU9XCJ0ZXh0XCIgI2VtYWlsPVwibmdGb3JtXCIgWyhuZ01vZGVsKV09XCJjcmVkZW50aWFsLmVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIGF1dG9mb2N1cz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGdcIiB0eXBlPVwicGFzc3dvcmRcIiAjcGFzc3dvcmQ9XCJuZ0Zvcm1cIiBbKG5nTW9kZWwpXT1cImNyZWRlbnRpYWwucGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLWxnIGJ0bi1ibG9jayBidG4tc3VjY2Vzc1wiIFtkaXNhYmxlZF09XCIhbXlGb3JtLmZvcm0udmFsaWRcIj5TaWduIEluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2Pnt7dGVzdH19PC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6W1Nob3dzU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJy4uL3NyYy9zdHlsZXNoZWV0ICBzL2Nzcy9hcHAuY3NzJ11cblxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgcHVibGljIGNyZWRlbnRpYWwgPSB7ZW1haWwgOicnLHBhc3N3b3JkOicnfVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3dTZXJ2aWNlOlNob3dzU2VydmljZSxwcml2YXRlIF9yb3V0ZXI6Um91dGVyKXt9XG4gICAgcHVibGljIHRlc3QgPSAnJztcbiAgICBvblN1Ym1pdCgpe1xuICAgICAgICB0aGlzLl9zaG93U2VydmljZS5sb2dpbih0aGlzLmNyZWRlbnRpYWwuZW1haWwsdGhpcy5jcmVkZW50aWFsLnBhc3N3b3JkKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICBkYXRhID0+IHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJ0hvbWUnXSksXG4gICAgICAgICAgICBlcnJvciA9PiBhbGVydChlcnJvciksXG4gICAgICAgICAgICAoKSA9PiBjb25zb2xlLmxvZyhcIkZpbmlzaGVkXCIpXG4gICAgICAgICk7XG4gICAgfVxufVxuIl19
