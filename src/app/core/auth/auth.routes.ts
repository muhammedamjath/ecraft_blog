import { Routes } from "@angular/router";
import { RegisterComponent } from "./pages/register/register.component";
// import { LoginComponent } from "./pages/login/login.compo?nent";

export const AuthRoutes:Routes = [
    {path:'',component:RegisterComponent},
    // {path:'login',component:LoginComponent}
]