import { Routes } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { HomeComponent } from "./components/home/home.component";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";
import { SingleBlogViewComponent } from "./components/single-blog-view/single-blog-view.component";
import { CreatedBlogsComponent } from "./components/created-blogs/created-blogs.component";
import { DraftedBlogsComponent } from "./components/drafted-blogs/drafted-blogs.component";

export const userRoutes:Routes = [
    {
        path:'home',component:HomeComponent,
        children:[
            {path:'landingpage',component:LandingPageComponent},
            {path:'createBlog',component:BlogPostComponent},
            {path:'singleBlog',component:SingleBlogViewComponent},
            {path:'blogs',component:CreatedBlogsComponent},
            {path:'draftedBlogs',component:DraftedBlogsComponent}
        ]
    }
]