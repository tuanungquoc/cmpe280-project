System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var SignUpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            let SignUpComponent = class SignUpComponent {
            };
            SignUpComponent = __decorate([
                core_1.Component({
                    selector: 'login',
                    template: `
        <div class="container">
            <br/>

            <div class="row">
                <div class="center-form panel">
                    <form method="post" ng-submit="signup()" name="signupForm">
                        <div class="panel-body">
                            <h2 class="text-center">Sign up</h2>

                            <div class="form-group"
                                 ng-class="{ 'has-success' : signupForm.email.$valid && signupForm.email.$dirty, 'has-error' : signupForm.email.$invalid && signupForm.email.$dirty }">
                                <input class="form-control input-lg" type="email" id="email"
                                       name="email" ng-model="email" placeholder="Email" required
                                       autofocus>

                                <div class="help-block text-danger" ng-if="signupForm.email.$dirty"
                                     ng-messages="signupForm.email.$error">
                                    <div ng-message="required">Your email address is required.</div>
                                    <div ng-message="email">Your email address is invalid.</div>
                                </div>
                            </div>

                            <div class="form-group"
                                 ng-class="{ 'has-success' : signupForm.password.$valid && signupForm.password.$dirty, 'has-error' : signupForm.password.$invalid && signupForm.password.$dirty }">
                                <input class="form-control input-lg" type="password" name="password"
                                       ng-model="password" placeholder="Password" required>

                                <div class="help-block text-danger"
                                     ng-if="signupForm.password.$dirty"
                                     ng-messages="signupForm.password.$error">
                                    <div ng-message="required">Password is required.</div>
                                </div>
                            </div>

                            <div class="form-group"
                                 ng-class="{ 'has-success' : signupForm.confirmPassword.$valid && signupForm.confirmPassword.$dirty, 'has-error' : signupForm.confirmPassword.$invalid && signupForm.confirmPassword.$dirty }">
                                <input class="form-control input-lg" type="password"
                                       name="confirmPassword" ng-model="confirmPassword"
                                       repeat-password="password" placeholder="Confirm Password"
                                       required>

                                <div class="help-block text-danger my-special-animation"
                                     ng-if="signupForm.confirmPassword.$dirty"
                                     ng-messages="signupForm.confirmPassword.$error">
                                    <div ng-message="required">You must confirm password.</div>
                                    <div ng-message="repeat">Passwords do not match.</div>
                                </div>
                            </div>

                            <button type="submit" ng-disabled="signupForm.$invalid"
                                    class="btn btn-lg btn-block btn-primary">Create Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
                    styleUrls: ['../src/stylesheets/css/app.css']
                }), 
                __metadata('design:paramtypes', [])
            ], SignUpComponent);
            exports_1("SignUpComponent", SignUpComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFtRUE7WUFDQSxDQUFDO1lBakVEO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1AsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTBEVDtvQkFDRCxTQUFTLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztpQkFFaEQsQ0FBQzs7K0JBQUE7WUFDRiw2Q0FDQyxDQUFBIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2xvZ2luJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8YnIvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlci1mb3JtIHBhbmVsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cInBvc3RcIiBuZy1zdWJtaXQ9XCJzaWdudXAoKVwiIG5hbWU9XCJzaWdudXBGb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyXCI+U2lnbiB1cDwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsgJ2hhcy1zdWNjZXNzJyA6IHNpZ251cEZvcm0uZW1haWwuJHZhbGlkICYmIHNpZ251cEZvcm0uZW1haWwuJGRpcnR5LCAnaGFzLWVycm9yJyA6IHNpZ251cEZvcm0uZW1haWwuJGludmFsaWQgJiYgc2lnbnVwRm9ybS5lbWFpbC4kZGlydHkgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGdcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiIG5nLW1vZGVsPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlclwiIG5nLWlmPVwic2lnbnVwRm9ybS5lbWFpbC4kZGlydHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1lc3NhZ2VzPVwic2lnbnVwRm9ybS5lbWFpbC4kZXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgbmctbWVzc2FnZT1cInJlcXVpcmVkXCI+WW91ciBlbWFpbCBhZGRyZXNzIGlzIHJlcXVpcmVkLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBuZy1tZXNzYWdlPVwiZW1haWxcIj5Zb3VyIGVtYWlsIGFkZHJlc3MgaXMgaW52YWxpZC48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsgJ2hhcy1zdWNjZXNzJyA6IHNpZ251cEZvcm0ucGFzc3dvcmQuJHZhbGlkICYmIHNpZ251cEZvcm0ucGFzc3dvcmQuJGRpcnR5LCAnaGFzLWVycm9yJyA6IHNpZ251cEZvcm0ucGFzc3dvcmQuJGludmFsaWQgJiYgc2lnbnVwRm9ybS5wYXNzd29yZC4kZGlydHkgfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgaW5wdXQtbGdcIiB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctbW9kZWw9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiByZXF1aXJlZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctaWY9XCJzaWdudXBGb3JtLnBhc3N3b3JkLiRkaXJ0eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctbWVzc2FnZXM9XCJzaWdudXBGb3JtLnBhc3N3b3JkLiRlcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBuZy1tZXNzYWdlPVwicmVxdWlyZWRcIj5QYXNzd29yZCBpcyByZXF1aXJlZC48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZy1jbGFzcz1cInsgJ2hhcy1zdWNjZXNzJyA6IHNpZ251cEZvcm0uY29uZmlybVBhc3N3b3JkLiR2YWxpZCAmJiBzaWdudXBGb3JtLmNvbmZpcm1QYXNzd29yZC4kZGlydHksICdoYXMtZXJyb3InIDogc2lnbnVwRm9ybS5jb25maXJtUGFzc3dvcmQuJGludmFsaWQgJiYgc2lnbnVwRm9ybS5jb25maXJtUGFzc3dvcmQuJGRpcnR5IH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGlucHV0LWxnXCIgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIiBuZy1tb2RlbD1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQtcGFzc3dvcmQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVscC1ibG9jayB0ZXh0LWRhbmdlciBteS1zcGVjaWFsLWFuaW1hdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmctaWY9XCJzaWdudXBGb3JtLmNvbmZpcm1QYXNzd29yZC4kZGlydHlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5nLW1lc3NhZ2VzPVwic2lnbnVwRm9ybS5jb25maXJtUGFzc3dvcmQuJGVycm9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXF1aXJlZFwiPllvdSBtdXN0IGNvbmZpcm0gcGFzc3dvcmQuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG5nLW1lc3NhZ2U9XCJyZXBlYXRcIj5QYXNzd29yZHMgZG8gbm90IG1hdGNoLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5nLWRpc2FibGVkPVwic2lnbnVwRm9ybS4kaW52YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tbGcgYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XCI+Q3JlYXRlIEFjY291bnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZVVybHM6IFsnLi4vc3JjL3N0eWxlc2hlZXRzL2Nzcy9hcHAuY3NzJ11cblxufSlcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQge1xufVxuXG5cbiJdfQ==
