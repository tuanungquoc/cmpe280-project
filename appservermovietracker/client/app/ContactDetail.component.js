System.register(['angular2/router', 'angular2/core'], function(exports_1, context_1) {
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
    var router_1, core_1;
    var ContactComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ContactComponent = (function () {
                function ContactComponent(_router) {
                    this._router = _router;
                    this.contact = null;
                }
                ;
                ContactComponent.prototype.onPassCreateContact = function () {
                    this._router.navigate(['NewContact', { lastName: this.contact.lastName }]);
                };
                ContactComponent = __decorate([
                    core_1.Component({
                        selector: 'contact',
                        template: "\n\n      <div>\n         First Name: <input type=\"text\" id=\"firstName\" value=\"{{contact.firstName}}\"> <br>\n        Last Name:  <input type=\"text\" id=\"lastName\" value=\"{{contact.lastName}}\"> <br>\n        Phone number: <input type=\"text\" id=\"phone\" value=\"{{contact.email}}\"> <br>\n        Email:  <input type=\"text\" id=\"email\" value=\"{{contact.email}}\"> <br>\n        <button (click)=\"onPassCreateContact()\">Create a Pass New Contact</button>\n      </div>\n    ",
                        inputs: ["contact"]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ContactComponent);
                return ContactComponent;
            }());
            exports_1("ContactComponent", ContactComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRhY3REZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUdJLDBCQUFvQixPQUFjO29CQUFkLFlBQU8sR0FBUCxPQUFPLENBQU87b0JBRjNCLFlBQU8sR0FBVyxJQUFJLENBQUM7Z0JBRU0sQ0FBQzs7Z0JBRXJDLDhDQUFtQixHQUFuQjtvQkFFRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksRUFBRyxFQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUUsQ0FBQztnQkF0Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsU0FBUzt3QkFDbkIsUUFBUSxFQUFFLDRlQVNUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDdEIsQ0FBQzs7b0NBQUE7Z0JBV0YsdUJBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELCtDQVVDLENBQUEiLCJmaWxlIjoiQ29udGFjdERldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjb250YWN0JyxcbiAgICB0ZW1wbGF0ZTogYFxuXG4gICAgICA8ZGl2PlxuICAgICAgICAgRmlyc3QgTmFtZTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmaXJzdE5hbWVcIiB2YWx1ZT1cInt7Y29udGFjdC5maXJzdE5hbWV9fVwiPiA8YnI+XG4gICAgICAgIExhc3QgTmFtZTogIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibGFzdE5hbWVcIiB2YWx1ZT1cInt7Y29udGFjdC5sYXN0TmFtZX19XCI+IDxicj5cbiAgICAgICAgUGhvbmUgbnVtYmVyOiA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBob25lXCIgdmFsdWU9XCJ7e2NvbnRhY3QuZW1haWx9fVwiPiA8YnI+XG4gICAgICAgIEVtYWlsOiAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJlbWFpbFwiIHZhbHVlPVwie3tjb250YWN0LmVtYWlsfX1cIj4gPGJyPlxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvblBhc3NDcmVhdGVDb250YWN0KClcIj5DcmVhdGUgYSBQYXNzIE5ldyBDb250YWN0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIGlucHV0czogW1wiY29udGFjdFwiXVxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0Q29tcG9uZW50IHtcbiAgICBwdWJsaWMgY29udGFjdDogQ29udGFjdD0gbnVsbDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JvdXRlcjpSb3V0ZXIpe307XG5cbiAgICBvblBhc3NDcmVhdGVDb250YWN0KClcbiAgICB7XG4gICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWydOZXdDb250YWN0JyAsIHtsYXN0TmFtZTogdGhpcy5jb250YWN0Lmxhc3ROYW1lfV0pO1xuICAgIH1cblxufVxuIl19
