System.register(['angular2/core', "angular2/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ShowsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            let ShowsService = class ShowsService {
                constructor(_http) {
                    this._http = _http;
                    this.isLogin = false;
                }
                getShowsByGenre(genre) {
                    return this._http.get("/api/shows?genre=" + genre).map(res => res.json());
                }
                getShowsByAlphabet(char) {
                    return this._http.get("/api/shows?alphabet=" + char).map(res => res.json());
                }
                addShow(showName) {
                    var param = 'showName=' + showName;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post("/api/shows", param, { headers: headers }).map(res => res);
                }
                getShowById(id) {
                    return this._http.get("/api/shows/" + id).map(res => res.json());
                }
                login(email, password) {
                    var param = 'email=' + email + '&password=' + password;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this._http.post("/logIn", param, { headers: headers }).map(res => res);
                }
            };
            ShowsService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [http_1.Http])
            ], ShowsService);
            exports_1("ShowsService", ShowsService);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFDSSxZQUFvQixLQUFVO29CQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7b0JBQ3ZCLFlBQU8sR0FBRyxLQUFLLENBQUM7Z0JBRFMsQ0FBQztnQkFHakMsZUFBZSxDQUFDLEtBQVk7b0JBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsR0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQUNELGtCQUFrQixDQUFDLElBQVc7b0JBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RSxDQUFDO2dCQUNELE9BQU8sQ0FBQyxRQUFlO29CQUNuQixJQUFJLEtBQUssR0FBRyxXQUFXLEdBQUMsUUFBUSxDQUFDO29CQUNqQyxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO29CQUNwRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLEtBQUssRUFBQyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ2hGLENBQUM7Z0JBRUQsV0FBVyxDQUFDLEVBQVM7b0JBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbkUsQ0FBQztnQkFFRCxLQUFLLENBQUMsS0FBWSxFQUFFLFFBQWU7b0JBQy9CLElBQUksS0FBSyxHQUFHLFFBQVEsR0FBQyxLQUFLLEdBQUMsWUFBWSxHQUFDLFFBQVEsQ0FBQztvQkFDakQsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztvQkFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUM3RSxDQUFDO1lBQ0wsQ0FBQztZQTdCRDtnQkFBQyxpQkFBVSxFQUFFOzs0QkFBQTtZQUViLHVDQTJCQyxDQUFBIiwiZmlsZSI6InNob3cuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0hlYWRlcnMsIEh0dHB9IGZyb20gXCJhbmd1bGFyMi9odHRwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuQEluamVjdGFibGUoKVxuXG5leHBvcnQgY2xhc3MgU2hvd3NTZXJ2aWNle1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCl7fVxuICAgIHB1YmxpYyBpc0xvZ2luID0gZmFsc2U7XG5cbiAgICBnZXRTaG93c0J5R2VucmUoZ2VucmU6c3RyaW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcIi9hcGkvc2hvd3M/Z2VucmU9XCIrZ2VucmUpLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gICAgfVxuICAgIGdldFNob3dzQnlBbHBoYWJldChjaGFyOnN0cmluZyl7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcIi9hcGkvc2hvd3M/YWxwaGFiZXQ9XCIrY2hhcikubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICB9XG4gICAgYWRkU2hvdyhzaG93TmFtZTpzdHJpbmcpe1xuICAgICAgICB2YXIgcGFyYW0gPSAnc2hvd05hbWU9JytzaG93TmFtZTtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KFwiL2FwaS9zaG93c1wiLHBhcmFtLHtoZWFkZXJzOmhlYWRlcnN9KS5tYXAocmVzID0+cmVzKTtcbiAgICB9XG5cbiAgICBnZXRTaG93QnlJZChpZDpzdHJpbmcpe1xuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXCIvYXBpL3Nob3dzL1wiK2lkKS5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIH1cblxuICAgIGxvZ2luKGVtYWlsOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKXtcbiAgICAgICAgdmFyIHBhcmFtID0gJ2VtYWlsPScrZW1haWwrJyZwYXNzd29yZD0nK3Bhc3N3b3JkO1xuICAgICAgICB2YXIgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoXCIvbG9nSW5cIixwYXJhbSx7aGVhZGVyczpoZWFkZXJzfSkubWFwKHJlcyA9PiByZXMpO1xuICAgIH1cbn1cbiJdfQ==
