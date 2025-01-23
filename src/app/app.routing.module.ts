import { Routes } from "@angular/router";

export const AppRoutes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: '**', redirectTo: '/' }
];