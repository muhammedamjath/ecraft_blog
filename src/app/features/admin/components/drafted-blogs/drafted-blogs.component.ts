import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drafted-blogs',
  standalone: true,
  imports: [
    DatePipe,
    CommonModule
  ],
  templateUrl: './drafted-blogs.component.html',
  styleUrl: './drafted-blogs.component.css'
})
export class DraftedBlogsComponent implements OnInit {

  constructor(private adminService:AdminService , private router:Router){}


  blogs:any
  blogCount:number = 0

  ngOnInit(): void {
    this.adminService.getDraftedBlogs().subscribe((res)=>{
      this.blogs = res.drafts
      this.blogCount = res.total
      
    })
  }

  open(id:string){
    this.router.navigate(['/admin/home/singleView/'+id])
  }
}
