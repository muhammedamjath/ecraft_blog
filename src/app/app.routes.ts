import { Routes } from '@angular/router';
import { AdminGuard } from './features/admin/admin.guard';
import { AuthGuard } from './core/auth/auth.guard';
import { UserGuard } from './features/user/user.guard';

export const routes: Routes = [
    {
        path:'',loadChildren:() => import ('./core/auth/auth.routes').then(m => m.AuthRoutes),canActivate:[AuthGuard]
    },
    {
        path:'user',loadChildren:() => import ('./features/user/userRoutes.routes').then (m => m.userRoutes),canActivate:[UserGuard]
    },
    {
        path:'admin',loadChildren:() => import ('./features/admin/adminRoutes.routes').then (m => m.AdminRoutes),canActivate:[AdminGuard]
    }
];
