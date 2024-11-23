import { Routes } from "@angular/router";
import { AdminHomeComponent } from "./components/home/home.component";
import { DashbordComponent } from "./components/dashbord/dashbord.component";
import { UserListComponent } from "./components/user-list/user-list.component";

export const AdminRoutes:Routes = [
    {
        path:'home',component:AdminHomeComponent,
        children:[
            {path:'dashboard',component:DashbordComponent},
            {path:'userslist',component:UserListComponent}
        ]
    }
]