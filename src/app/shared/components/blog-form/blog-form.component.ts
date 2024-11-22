import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuillModule } from 'ngx-quill';
import { UserService } from '../../../features/user/userService.service';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, QuillModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css',
})
export class BlogFormComponent implements OnInit {
  blogForm: FormGroup;
  submitted = false;
  blogId: string = '';
  blog: any;
  @Output() formContent = new EventEmitter<any>();
  @Input() title: string = '';

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      tags: [''],
      content: ['', Validators.required],
      submitType: [''],
      id: [''], // Ensure `id` field exists in the form
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.blogId = params['id'];
    });

    if (this.blogId) {
      this.userService.getSingleBlog(this.blogId).subscribe((res) => {
        this.blog = res;
        this.blogForm.patchValue(this.blog);
      });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.blogForm.invalid) {
      return;
    }

    const tags = Array.isArray(this.blogForm.value.tags)
      ? this.blogForm.value.tags
      : this.blogForm.value.tags.split(',').map((tag: string) => tag.trim());

    const formData = {
      ...this.blogForm.value,
      tags,
    };

    if (this.blog && this.blog._id) {
      formData.id = this.blog._id;
    }

    this.formContent.emit(formData);

    this.blogForm.reset();
    this.submitted = false;
  }

  saveDraft() {
    this.blogForm.patchValue({ submitType: 'draft' });
    this.onSubmit();
  }

  submitPost() {
    this.blogForm.patchValue({ submitType: 'posted' });
    this.onSubmit();
  }
}
