import { Routes } from "@angular/router";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { HomeComponent } from "./components/home/home.component";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";
import { SingleBlogViewComponent } from "./components/single-blog-view/single-blog-view.component";
import { CreatedBlogsComponent } from "./components/created-blogs/created-blogs.component";
import { DraftedBlogsComponent } from "./components/drafted-blogs/drafted-blogs.component";
import { UpdateBlogComponent } from "./components/update-blog/update-blog.component";

export const userRoutes:Routes = [
    {
        path:'home',component:HomeComponent,
        children:[
            {path:'landingpage',component:LandingPageComponent},
            {path:'createBlog',component:BlogPostComponent},
            {path:'singleBlog/:id',component:SingleBlogViewComponent},
            {path:'blogs',component:CreatedBlogsComponent},
            {path:'draftedBlogs',component:DraftedBlogsComponent},
            {path:'updateBlog/:id',component:UpdateBlogComponent}
        ]
    }
]