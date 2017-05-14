System.register(['angular2/core', './ContactDetail.component', './contact.service'], function(exports_1, context_1) {
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
    var core_1, ContactDetail_component_1, contact_service_1;
    var ContactListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ContactDetail_component_1_1) {
                ContactDetail_component_1 = ContactDetail_component_1_1;
            },
            function (contact_service_1_1) {
                contact_service_1 = contact_service_1_1;
            }],
        execute: function() {
            ContactListComponent = (function () {
                function ContactListComponent(_contactService) {
                    this._contactService = _contactService;
                    this.selectContact = {};
                }
                ;
                ContactListComponent.prototype.onSelect = function (contact) {
                    this.selectContact = contact;
                };
                ContactListComponent.prototype.getContacts = function () {
                    var _this = this;
                    this._contactService.getContacts().then(function (contacts) { return _this.contacts = contacts; });
                };
                ContactListComponent.prototype.ngOnInit = function () {
                    this.getContacts();
                };
                ContactListComponent = __decorate([
                    core_1.Component({
                        selector: 'contactlist',
                        template: "\n      <ul>\n            <li *ngFor=\"#contact of contacts\"\n              (click)=\"onSelect(contact)\" [class.clicked]=\"selectContact === contact\">\n              {{contact.firstName}}\n            </li>\n      </ul>\n    <contact [contact]=\"selectContact\"></contact>\n    ",
                        providers: [contact_service_1.ContactService],
                        directives: [ContactDetail_component_1.ContactComponent]
                    }), 
                    __metadata('design:paramtypes', [contact_service_1.ContactService])
                ], ContactListComponent);
                return ContactListComponent;
            }());
            exports_1("ContactListComponent", ContactListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbnRhY3RMaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFHSSw4QkFBb0IsZUFBOEI7b0JBQTlCLG9CQUFlLEdBQWYsZUFBZSxDQUFlO29CQUQzQyxrQkFBYSxHQUFHLEVBQUUsQ0FBQztnQkFDMEIsQ0FBQzs7Z0JBQ3JELHVDQUFRLEdBQVIsVUFBUyxPQUFPO29CQUNkLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO2dCQUMvQixDQUFDO2dCQUNELDBDQUFXLEdBQVg7b0JBQUEsaUJBRUM7b0JBREMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFtQixJQUFLLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLEVBQXhCLENBQXdCLENBQUMsQ0FBQTtnQkFDNUYsQ0FBQztnQkFHRCx1Q0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztnQkE1Qkw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIsUUFBUSxFQUFFLDJSQVFUO3dCQUNELFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7d0JBQzNCLFVBQVUsRUFBQyxDQUFDLDBDQUFnQixDQUFDO3FCQUNoQyxDQUFDOzt3Q0FBQTtnQkFnQkYsMkJBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELHVEQWVDLENBQUEiLCJmaWxlIjoiQ29udGFjdExpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Q29udGFjdENvbXBvbmVudH0gZnJvbSAnLi9Db250YWN0RGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRhY3RTZXJ2aWNlfSBmcm9tICcuL2NvbnRhY3Quc2VydmljZSc7XG5pbXBvcnQge0NvbnRhY3R9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQge09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnY29udGFjdGxpc3QnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICA8dWw+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwiI2NvbnRhY3Qgb2YgY29udGFjdHNcIlxuICAgICAgICAgICAgICAoY2xpY2spPVwib25TZWxlY3QoY29udGFjdClcIiBbY2xhc3MuY2xpY2tlZF09XCJzZWxlY3RDb250YWN0ID09PSBjb250YWN0XCI+XG4gICAgICAgICAgICAgIHt7Y29udGFjdC5maXJzdE5hbWV9fVxuICAgICAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPGNvbnRhY3QgW2NvbnRhY3RdPVwic2VsZWN0Q29udGFjdFwiPjwvY29udGFjdD5cbiAgICBgLFxuICAgIHByb3ZpZGVyczogW0NvbnRhY3RTZXJ2aWNlXVxuICAgIGRpcmVjdGl2ZXM6W0NvbnRhY3RDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuICAgIHB1YmxpYyBjb250YWN0czogQ29udGFjdFtdO1xuICAgIHB1YmxpYyBzZWxlY3RDb250YWN0ID0ge307XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29udGFjdFNlcnZpY2U6Q29udGFjdFNlcnZpY2Upe307XG4gICAgb25TZWxlY3QoY29udGFjdCkge1xuICAgICAgdGhpcy5zZWxlY3RDb250YWN0ID0gY29udGFjdDtcbiAgICB9XG4gICAgZ2V0Q29udGFjdHMoKXtcbiAgICAgIHRoaXMuX2NvbnRhY3RTZXJ2aWNlLmdldENvbnRhY3RzKCkudGhlbigoY29udGFjdHM6IENvbnRhY3RbXSkgPT4gdGhpcy5jb250YWN0cyA9IGNvbnRhY3RzKVxuICAgIH1cblxuICBcbiAgICBuZ09uSW5pdCgpOmFueXtcbiAgICAgIHRoaXMuZ2V0Q29udGFjdHMoKTtcbiAgICB9XG59XG4iXX0=
