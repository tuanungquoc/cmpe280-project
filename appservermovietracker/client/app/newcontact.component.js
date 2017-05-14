System.register(['angular2/router', './contact.service', 'angular2/core'], function(exports_1, context_1) {
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
    var router_1, contact_service_1, core_1;
    var NewContactComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewContactComponent = (function () {
                function NewContactComponent(_contactService, _router, _routeParans) {
                    this._contactService = _contactService;
                    this._router = _router;
                    this._routeParans = _routeParans;
                    this.passLastName = "";
                }
                NewContactComponent.prototype.ngOnInit = function () {
                    this.passLastName = this._routeParans.get('lastName');
                };
                ;
                NewContactComponent.prototype.onCreateContact = function (firstName, lastName, phone, email) {
                    var contact = { firstName: firstName, lastName: lastName, phone: phone, email: email };
                    this._contactService.insertContact(contact);
                    this._router.navigate(['Contacts']);
                };
                NewContactComponent = __decorate([
                    core_1.Component({
                        selector: 'newcontact',
                        template: "\n      <div>\n        First Name: <input type=\"text\" id=\"firstName\" #firstName> <br>\n        Last Name:  <input type=\"text\" id=\"lastName\" #lastName value=\"{{passLastName}}\"> <br>\n        Phone number: <input type=\"text\" id=\"phone\" #phone> <br>\n        Email:  <input type=\"text\" id=\"email\" #email> <br>\n        <button (click)='onCreateContact(firstName.value, lastName.value, phone.value, email.value)'>Create New Contact</button>\n      </div>\n    ",
                        providers: [contact_service_1.ContactService]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof contact_service_1.ContactService !== 'undefined' && contact_service_1.ContactService) === 'function' && _a) || Object, router_1.Router, router_1.RouteParams])
                ], NewContactComponent);
                return NewContactComponent;
                var _a;
            }());
            exports_1("NewContactComponent", NewContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2NvbnRhY3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUtJLDZCQUFvQixlQUErQixFQUFVLE9BQWUsRUFBVSxZQUF5QjtvQkFBM0Ysb0JBQWUsR0FBZixlQUFlLENBQWdCO29CQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7b0JBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7b0JBSnhHLGlCQUFZLEdBQUcsRUFBRSxDQUFDO2dCQUkwRixDQUFDO2dCQUhwSCxzQ0FBUSxHQUFSO29CQUNHLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3pELENBQUM7O2dCQUdELDZDQUFlLEdBQWYsVUFBZ0IsU0FBUyxFQUFFLFFBQVEsRUFBQyxLQUFLLEVBQUMsS0FBSztvQkFDM0MsSUFBSSxPQUFPLEdBQVcsRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsS0FBSyxFQUFDLENBQUM7b0JBQzFGLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBRXhDLENBQUM7Z0JBekJMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSw0ZEFRVDt3QkFDRCxTQUFTLEVBQUMsQ0FBQyxnQ0FBYyxDQUFDO3FCQUM3QixDQUFDOzt1Q0FBQTtnQkFjRiwwQkFBQzs7WUFBRCxDQWJBLEFBYUMsSUFBQTtZQWJELHFEQWFDLENBQUEiLCJmaWxlIjoibmV3Y29udGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZVBhcmFtcywgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7IENvbnRhY3RTZXJ2aWNlIH0gZnJvbSAnLi9jb250YWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmV3Y29udGFjdCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIEZpcnN0IE5hbWU6IDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3ROYW1lXCIgI2ZpcnN0TmFtZT4gPGJyPlxuICAgICAgICBMYXN0IE5hbWU6ICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImxhc3ROYW1lXCIgI2xhc3ROYW1lIHZhbHVlPVwie3twYXNzTGFzdE5hbWV9fVwiPiA8YnI+XG4gICAgICAgIFBob25lIG51bWJlcjogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwaG9uZVwiICNwaG9uZT4gPGJyPlxuICAgICAgICBFbWFpbDogIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZW1haWxcIiAjZW1haWw+IDxicj5cbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPSdvbkNyZWF0ZUNvbnRhY3QoZmlyc3ROYW1lLnZhbHVlLCBsYXN0TmFtZS52YWx1ZSwgcGhvbmUudmFsdWUsIGVtYWlsLnZhbHVlKSc+Q3JlYXRlIE5ldyBDb250YWN0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHByb3ZpZGVyczpbQ29udGFjdFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIE5ld0NvbnRhY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBwYXNzTGFzdE5hbWUgPSBcIlwiO1xuICAgIG5nT25Jbml0KCk6IGFueXtcbiAgICAgICB0aGlzLnBhc3NMYXN0TmFtZSA9IHRoaXMuX3JvdXRlUGFyYW5zLmdldCgnbGFzdE5hbWUnKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6IENvbnRhY3RTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfcm91dGVQYXJhbnM6IFJvdXRlUGFyYW1zKSB7IH07XG5cbiAgICBvbkNyZWF0ZUNvbnRhY3QoZmlyc3ROYW1lLCBsYXN0TmFtZSxwaG9uZSxlbWFpbCl7XG4gICAgICAgIGxldCBjb250YWN0OiBDb250YWN0ID17Zmlyc3ROYW1lOiBmaXJzdE5hbWUsIGxhc3ROYW1lOmxhc3ROYW1lLCBwaG9uZTpwaG9uZSwgZW1haWw6ZW1haWx9O1xuICAgICAgICB0aGlzLl9jb250YWN0U2VydmljZS5pbnNlcnRDb250YWN0KGNvbnRhY3QpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydDb250YWN0cyddKTtcblxuICAgIH1cbn1cbiJdfQ==
