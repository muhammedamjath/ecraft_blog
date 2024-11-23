import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-published-blog',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule
  ],
  templateUrl: './published-blog.component.html',
  styleUrl: './published-blog.component.css'
})
export class PublishedBlogComponent {
    constructor(private adminService:AdminService , private router:Router){}
    blogs:any
    blogCount:number = 0
  
    ngOnInit(): void {
      this.adminService.getPublishedBlogs().subscribe((res)=>{
        this.blogs = res.blogs
        this.blogCount = res.total
        
      })
    }
  
    open(id:string){
      this.router.navigate(['/admin/home/singleView/'+id])
    }
}
