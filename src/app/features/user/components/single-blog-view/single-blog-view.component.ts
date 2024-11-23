import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../userService.service';
import Swal from 'sweetalert2';

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
  completeBlog(id: string) {
    this.router.navigate(['/user/home/updateBlog/' + id])
  }

  postBlog(id: string) {

    Swal.fire({
      title: 'Are you sure you want to post this blog?',
      text: 'You won’t be able to undo this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, post it!',
      cancelButtonText: 'Cancel',
    }).then((result)=>{
      if(result.isConfirmed){
        this.userService.updateTypeToPost(id).subscribe((res) => {
          Swal.fire({
            text: 'blog has been posted.',
            icon: 'success',
            timer: 3000,
          });
          this.blog.type = 'posted';
        });
      }
    })

    
  }

  updateBlog(id: string) {
    this.router.navigate(['/user/home/updateBlog/' + id])
  }

  deleteBlog(id: string) {
    Swal.fire({
      title: 'Are you sure you want to delete this blog?',
      text: 'You won’t be able to undo this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    }).then((result)=>{
      if(result.isConfirmed){
        this.userService.deleteBlog(id).subscribe((res) => {
          Swal.fire({
            text: 'blog has been deleted.',
            icon: 'success',
            timer: 3000,
          });
          this.router.navigate(['/user/home/landingpage']);
        });
      }
    })
  }
}
