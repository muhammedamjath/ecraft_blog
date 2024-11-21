import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuillModule } from 'ngx-quill';

@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, QuillModule],
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css',
})
export class BlogFormComponent {
  blogForm: FormGroup;
  submitted = false;

  @Output() formContent = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.blogForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      tags: [''],
      content: ['', Validators.required],
      submitType: [''], 
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.blogForm.invalid) {
      return;
    } else {
      const formData = {
        ...this.blogForm.value,
        tags: this.blogForm.value.tags
          ? this.blogForm.value.tags.split(',').map((tag: string) => tag.trim())
          : [],
      };

      this.formContent.emit(formData);

      this.blogForm.reset();
      this.submitted = false;
    }
  }

  saveDraft() {
    this.blogForm.patchValue({ submitType: 'draft' });
    this.onSubmit();
  }

  submitPost() {
    this.blogForm.patchValue({ submitType: 'post' });
    this.onSubmit();
  }
}
