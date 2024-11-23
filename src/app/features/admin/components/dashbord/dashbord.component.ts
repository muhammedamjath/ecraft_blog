import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent implements OnInit {

  constructor(private adminService:AdminService){}

  totalBlogs: number = 0;
  draftBlogs: number = 0;
  publishedBlogs: number = 0;
  totalUsers: number = 0;

  currentDate: Date = new Date();

  ngOnInit(): void {
    this.adminService.getAllCount().subscribe((res)=>{
      this.totalBlogs = res.totalBlogs
      this.draftBlogs = res.totalDraftBlogs
      this.publishedBlogs = res.totalPostedBlogs
      this.totalUsers = res.totalUsers
      
    })
  }
}
