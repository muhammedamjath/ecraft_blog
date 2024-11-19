import { Routes } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { HomeComponent } from "./components/home/home.component";

export const userRoutes:Routes = [
    {
        path:'home',component:HomeComponent,
        children:[
            {path:'landingpage',component:LandingPageComponent}
        ]
    }
]