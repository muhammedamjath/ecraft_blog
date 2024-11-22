import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../userService.service';

@Component({
  selector: 'app-single-blog-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-blog-view.component.html',
  styleUrl: './single-blog-view.component.css',
})
export class SingleBlogViewComponent implements OnInit {
  constructor(
    private activatedRoutes: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  blog: any;
  blogId: string = '';
  userId: any;

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((params) => {
      this.blogId = params['id'];
    });

    if (typeof window !== 'undefined') {
      this.userId = localStorage.getItem('userId');
    }

    if (this.blogId) {
      this.userService.getSingleBlog(this.blogId).subscribe((res) => {
        this.blog = res;
      });
    }
  }
  completeBlog(id: string) {}

  postBlog(id: string) {
    this.userService.updateTypeToPost(id).subscribe((res) => {
      this.blog.type = 'posted';
    });
  }

  updateBlog(id: string) {
    this.router.navigate(['/user/home/updateBlog/' + id])
  }

  deleteBlog(id: string) {
    this.userService.deleteBlog(id).subscribe((res) => {
      this.router.navigate(['/user/home/landingpage']);
    });
  }
}
