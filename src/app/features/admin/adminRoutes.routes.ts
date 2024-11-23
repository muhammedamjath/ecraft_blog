import { Routes } from "@angular/router";
import { AdminHomeComponent } from "./components/home/home.component";
import { DashbordComponent } from "./components/dashbord/dashbord.component";

export const AdminRoutes:Routes = [
    {
        path:'home',component:AdminHomeComponent,
        children:[
            {path:'dashboard',component:DashbordComponent}
        ]
    }
]