import { Routes } from "@angular/router";
import { RegisterComponent } from "./pages/register/register.component";
import { LoginComponent } from "./pages/login/login.component";

export const AuthRoutes:Routes = [
    {path:'',component:LoginComponent},
    {path:'register',component:RegisterComponent}
]