import { Component } from '@angular/core';
import { BlogFormComponent } from '../../../../shared/components/blog-form/blog-form.component';
import { UserService } from '../../userService.service';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [
    BlogFormComponent
  ],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

  constructor(private userService:UserService){}


  blogPost(data:any){
    
      if(data){
        this.userService.blogPost(data).subscribe((res)=>{
          console.log(res);
        })
      }
      
  }
}
