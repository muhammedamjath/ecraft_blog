import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { QuillEditorComponent } from 'ngx-quill';


interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: Date;
}


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    QuillModule,
    DatePipe
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})

export class LandingPageComponent implements OnInit {
  posts = signal<BlogPost[]>([
    {
      id: 1,
      title: 'First Blog Post',
      content: 'This is the content of the first blog post...',
      category: 'Technology',
      tags: ['Angular', 'Web Development'],
      createdAt: new Date()
    },
  ]);

  searchTerm = '';
  showCreateModal = false;
  
  newPost: Partial<BlogPost> = {};
  tagsInput = '';

  ngOnInit() {
    
  }

  filterPosts() {
    
  }


}
