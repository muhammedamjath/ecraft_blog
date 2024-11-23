import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../userService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  blogs: any;

  searchIndex: string = '';
  pageNumber: number = 1;
  pageSize: number = 9;
  totalPages: number = 0;
  currentPage: number = 1;
  totalBlogs: number = 0;
  pages: number[] = [];
  userId: any;

  ngOnInit() {
    this.loadBlogs();
    if (typeof window != 'undefined') {
      this.userId = localStorage.getItem('userId');
    }
  }

  loadBlogs() {
    const userId = localStorage.getItem('userId');
    const data = {
      searchIndex: this.searchIndex,
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
    };

    this.userService.getAllBlogs(data).subscribe((res) => {
      console.log(res);

      this.blogs = res.blogs.map((blog: any) => {
        return {
          ...blog,
          isLiked: blog.likedBy?.includes(userId),
        };
      });

      this.currentPage = res.currentPage;
      this.totalPages = res.totalPages;
      this.totalBlogs = res.totalBlogs;
      this.updatePages();
    });
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.pageNumber = page;
    this.loadBlogs();
  }

  updatePages() {
    const maxVisiblePages = 5;
    let startPage: number, endPage: number;

    if (this.totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = this.totalPages;
    } else {
      const halfRange = Math.floor(maxVisiblePages / 2);

      if (this.currentPage <= halfRange) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (this.currentPage + halfRange >= this.totalPages) {
        startPage = this.totalPages - maxVisiblePages + 1;
        endPage = this.totalPages;
      } else {
        startPage = this.currentPage - halfRange;
        endPage = this.currentPage + halfRange;
      }
    }

    this.pages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  open(id: string) {
    this.router.navigate(['/user/home/singleBlog/' + id]);
  }

  toggleLike(id: string, userId: string) {
    const data = { blogId: id, userId: userId };

    this.userService.updateLike(data).subscribe((res: any) => {
      const blog = this.blogs.find((b: any) => b._id === id);

      if (blog) {
        if (blog.likedBy.includes(userId)) {
          blog.likedBy = blog.likedBy.filter((user: string) => user !== userId);
        } else {
          blog.likedBy.push(userId);
        }

        blog.likedCount = res.likeCount;
      }
    });
  }
}
