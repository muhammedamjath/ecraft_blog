import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',loadChildren:() => import ('./core/auth/auth.routes').then(m => m.AuthRoutes)
    },
    {
        path:'user',loadChildren:() => import ('./features/user/userRoutes.routes').then (m => m.userRoutes)
    }
];
