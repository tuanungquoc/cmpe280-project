System.register(['angular2/core', "./show.service"], function(exports_1, context_1) {
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
    var core_1, show_service_1;
    var AddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (show_service_1_1) {
                show_service_1 = show_service_1_1;
            }],
        execute: function() {
            let AddComponent = class AddComponent {
                constructor(_showService) {
                    this._showService = _showService;
                    this.show = { showName: '' };
                    this.test = '';
                }
                onSubmit() {
                    this._showService.addShow(this.show.showName).subscribe(data => this.test = 'Success Added', error => alert(error), () => console.log("Finished"));
                }
            };
            AddComponent = __decorate([
                core_1.Component({
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
                    providers: [show_service_1.ShowsService],
                    styleUrls: ['../src/stylesheets/css/app.css']
                }), 
                __metadata('design:paramtypes', [show_service_1.ShowsService])
            ], AddComponent);
            exports_1("AddComponent", AddComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBR0ksWUFBb0IsWUFBeUI7b0JBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUZ0QyxTQUFJLEdBQUcsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFDLENBQUU7b0JBQ3ZCLFNBQUksR0FBRyxFQUFFLENBQUU7Z0JBQzZCLENBQUM7Z0JBQ2hELFFBQVE7b0JBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQ25ELElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxHQUFHLGVBQWUsRUFDbkMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDckIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUNoQyxDQUFDO2dCQUNOLENBQUM7WUFDTCxDQUFDO1lBaENEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7S0FlVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQywyQkFBWSxDQUFDO29CQUN6QixTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFDaEQsQ0FBQzs7NEJBQUE7WUFDRix1Q0FXQyxDQUFBIiwiZmlsZSI6ImFkZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTaG93c1NlcnZpY2V9IGZyb20gXCIuL3Nob3cuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FkZCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZ1wiPkFkZCBUViBTaG93PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gbmFtZT1cImFkZEZvcm1cIiAjbXlGb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzaG93TmFtZVwiIG5nQ29udHJvbD1cInNob3dOYW1lXCIgI3Nob3dOYW1lPVwibmdGb3JtXCIgWyhuZ01vZGVsKV09XCJzaG93LnNob3dOYW1lXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBUViBzaG93IG5hbWVcIiByZXF1aXJlZCBhdXRvZm9jdXM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiBbZGlzYWJsZWRdPVwiIW15Rm9ybS5mb3JtLnZhbGlkXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57e3Rlc3R9fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW1Nob3dzU2VydmljZV0sXG4gICAgc3R5bGVVcmxzOiBbJy4uL3NyYy9zdHlsZXNoZWV0cy9jc3MvYXBwLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZENvbXBvbmVudCB7XG4gICAgcHVibGljIHNob3cgPSB7c2hvd05hbWUgOicnfSA7XG4gICAgcHVibGljIHRlc3QgPSAnJyA7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2hvd1NlcnZpY2U6U2hvd3NTZXJ2aWNlKXt9XG4gICAgb25TdWJtaXQoKXtcbiAgICAgICAgdGhpcy5fc2hvd1NlcnZpY2UuYWRkU2hvdyh0aGlzLnNob3cuc2hvd05hbWUpLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRhdGEgPT4gdGhpcy50ZXN0ID0gJ1N1Y2Nlc3MgQWRkZWQnLFxuICAgICAgICAgICAgZXJyb3IgPT4gYWxlcnQoZXJyb3IpLFxuICAgICAgICAgICAgKCkgPT4gY29uc29sZS5sb2coXCJGaW5pc2hlZFwiKVxuICAgICAgICApO1xuICAgIH1cbn1cbiJdfQ==
