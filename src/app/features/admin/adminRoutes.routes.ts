import { Routes } from "@angular/router";
import { AdminHomeComponent } from "./components/home/home.component";
import { DashbordComponent } from "./components/dashbord/dashbord.component";
import { UserListComponent } from "./components/user-list/user-list.component";
import { DraftedBlogsComponent } from "./components/drafted-blogs/drafted-blogs.component";
import { SingleBlogViewComponentInAdmin } from "./components/single-blog-view/single-blog-view.component";
import { PublishedBlogComponent } from "./components/published-blog/published-blog.component";

export const AdminRoutes:Routes = [
    {
        path:'home',component:AdminHomeComponent,
        children:[
            {path:'dashboard',component:DashbordComponent},
            {path:'userslist',component:UserListComponent},
            {path:'drafts',component:DraftedBlogsComponent},
            {path:'singleView/:id',component:SingleBlogViewComponentInAdmin},
            {path:'publishedBlog',component:PublishedBlogComponent}
        ]
    }
]