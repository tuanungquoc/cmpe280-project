import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { MovieComponent } from './movietracker/index';
import { DetailComponent } from './detail/index';
import { AddComponent } from './add/index';



const appRoutes: Routes = [
    { path: '', component: MovieComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'detail/:id', component: DetailComponent, canActivate: [AuthGuard]},
    {path: 'add', component: AddComponent, canActivate: [AuthGuard]},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);