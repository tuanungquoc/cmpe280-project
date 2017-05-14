
import {APP_BASE_HREF, ROUTER_PROVIDERS} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from "angular2/core";



bootstrap(AppComponent,[ROUTER_PROVIDERS,HTTP_PROVIDERS,provide(APP_BASE_HREF, {useValue: '/'})]);
