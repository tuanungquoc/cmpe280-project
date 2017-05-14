System.register(['angular2/core', './mock-contact'], function(exports_1, context_1) {
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
    var core_1, mock_contact_1;
    var ContactService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_contact_1_1) {
                mock_contact_1 = mock_contact_1_1;
            }],
        execute: function() {
            ContactService = (function () {
                function ContactService() {
                }
                ContactService.prototype.getContacts = function () {
                    return Promise.resolve(mock_contact_1.CONTACTS);
                };
                ContactService.prototype.insertContact = function (contact) {
                    Promise.resolve(mock_contact_1.CONTACTS).then(function (contacts) { return contacts.push(contact); });
                };
                ContactService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ContactService);
                return ContactService;
            }());
            exports_1("ContactService", ContactService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBO2dCQU9BLENBQUM7Z0JBTkUsb0NBQVcsR0FBWDtvQkFDRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyx1QkFBUSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0Qsc0NBQWEsR0FBYixVQUFjLE9BQWdCO29CQUMxQixPQUFPLENBQUMsT0FBTyxDQUFDLHVCQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFtQixJQUFHLE9BQUEsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO2dCQUNsRixDQUFDO2dCQVJKO29CQUFDLGlCQUFVLEVBQUU7O2tDQUFBO2dCQVNiLHFCQUFDO1lBQUQsQ0FQQSxBQU9DLElBQUE7WUFQRCwyQ0FPQyxDQUFBIiwiZmlsZSI6ImNvbnRhY3Quc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0NPTlRBQ1RTfSBmcm9tICcuL21vY2stY29udGFjdCdcbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIENvbnRhY3RTZXJ2aWNle1xuICAgZ2V0Q29udGFjdHMoKXtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoQ09OVEFDVFMpO1xuICAgfVxuICAgaW5zZXJ0Q29udGFjdChjb250YWN0OiBDb250YWN0KXtcbiAgICAgICBQcm9taXNlLnJlc29sdmUoQ09OVEFDVFMpLnRoZW4oKGNvbnRhY3RzOiBDb250YWN0W10pPT5jb250YWN0cy5wdXNoKGNvbnRhY3QpKTtcbiAgIH1cbn1cbiJdfQ==
