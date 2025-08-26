import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:"", redirectTo:'/Home', pathMatch:'full'},
    {path:"Home", loadComponent:()=>import('./Pagine/home/home.component').then(m => m.HomeComponent)},
    {path:"vendite", loadComponent:() => import('./Pagine/vendite/vendite.component').then(m=>m.VenditeComponent)},
    {path:"login", loadComponent:() => import('./Pagine/login/login.component').then(m=>m.LoginComponent)}
];
