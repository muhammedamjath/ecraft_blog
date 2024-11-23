import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  constructor(private adminService:AdminService){}

  userList:any
  totalUsers:number = 0

  ngOnInit(): void {
    this.adminService.getUsersList().subscribe((res)=>{
      this.userList = res.userData
      this.totalUsers = res.totalUsers
      console.log(res);
      
    })
  }
}
