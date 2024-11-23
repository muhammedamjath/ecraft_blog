import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { UserService } from '../../../user/userService.service';

@Component({
  selector: 'app-single-blog-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-blog-view.component.html',
  styleUrl: './single-blog-view.component.css',
})
export class SingleBlogViewComponentInAdmin implements OnInit {
  constructor(
    private activatedRoutes: ActivatedRoute,
    private userService:UserService
  ) {}

  blog: any;
  blogId: string = '';

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((params) => {
      this.blogId = params['id'];
    });


    if (this.blogId) {
      this.userService.getSingleBlog(this.blogId).subscribe((res) => {
        this.blog = res;
      });
    }
  }


}
