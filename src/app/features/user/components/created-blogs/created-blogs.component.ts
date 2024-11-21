import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../userService.service';

interface Blog {
  _id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: Date;
  type: string;
}

@Component({
  selector: 'app-created-blogs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './created-blogs.component.html',
  styleUrl: './created-blogs.component.css',
})
export class CreatedBlogsComponent {
  constructor(private userService: UserService) {}

  blogs: Blog[] = [];
  searchIndex: string = '';
  pageNumber: number = 1;
  pageSize: number = 8;
  totalPages: number = 0;
  currentPage: number = 1;
  totalBlogs: number = 0;
  pages: number[] = [];

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    const data = {
      searchIndex: this.searchIndex,
      pageNumber: this.currentPage,
      pageSize: this.pageSize,
    };
    this.userService.getBlogs(data).subscribe((res) => {
      this.blogs = res.blogs;
      this.currentPage = res.currentPage;
      this.totalPages = res.totalPages;
      this.totalBlogs = res.totalBlogs;

      this.updatePages();
    });
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
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

  completeBlog(_id: string) {}

  postBlog(_id: string) {}

  updateBlog(_id: string) {}
}
