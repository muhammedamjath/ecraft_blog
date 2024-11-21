import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

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
  selector: 'app-single-blog-view',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './single-blog-view.component.html',
  styleUrl: './single-blog-view.component.css'
})
export class SingleBlogViewComponent {
  blog: Blog = {
    _id:'123',
    title: 'My First Blog Post',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using  making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    category: 'Technology',
    tags: ['Angular', 'Web Development'],
    createdAt: new Date(),
    type: 'post'
  };

  completeBlog(id:string) {
    
  }

  postBlog(id:string) {
    
  }

  updateBlog(id:string) {
    
  }
}
