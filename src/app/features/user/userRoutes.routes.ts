import { Routes } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { HomeComponent } from "./components/home/home.component";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";

export const userRoutes:Routes = [
    {
        path:'home',component:HomeComponent,
        children:[
            {path:'landingpage',component:LandingPageComponent},
            {path:'createBlog',component:BlogPostComponent}
        ]
    }
]