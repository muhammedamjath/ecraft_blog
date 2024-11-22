import { Component } from '@angular/core';
import { BlogFormComponent } from "../../../../shared/components/blog-form/blog-form.component";
import { UserService } from '../../userService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-blog',
  standalone: true,
  imports: [BlogFormComponent],
  templateUrl: './update-blog.component.html',
  styleUrl: './update-blog.component.css'
})
export class UpdateBlogComponent {

  constructor(private userService:UserService , private router:Router){}

  title:string = 'Update the blog'

  updatedData(data:any){
    this.userService.updateBlog(data).subscribe((res)=>{
      this.router.navigate(['/user/home/landingpage'])
    })
    
  }
}
