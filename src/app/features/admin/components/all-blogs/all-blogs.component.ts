import { Component } from '@angular/core';
import { AdminService } from '../../admin.service';
import { CommonModule, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-blogs',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe
  ],
  templateUrl: './all-blogs.component.html',
  styleUrl: './all-blogs.component.css'
})
export class AllBlogsComponent {
  constructor(private adminService:AdminService , private router:Router){}
  blogs:any
  blogCount:number = 0

  ngOnInit(): void {
    this.adminService.getFullBlogs().subscribe((res)=>{
      this.blogs = res.posts
      this.blogCount = res.total
      
    })
  }

  open(id:string){
    this.router.navigate(['/admin/home/singleView/'+id])
  }
}
