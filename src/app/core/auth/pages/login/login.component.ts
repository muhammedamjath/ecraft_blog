import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Authservice } from '../../authService.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;
  submitted = false;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService:Authservice
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }else{
      this.authService.loginpost(this.loginForm.value).subscribe((res)=>{
        localStorage.setItem('token',res.token)

        if(res.data.roll == 'admin'){
          localStorage.setItem('adminId',res.data.id)
          this.router.navigate(['/admin/home/dashboard'])

        }else if(res.data.roll == 'user'){

          localStorage.setItem('userId',res.data.id)
          this.router.navigate(['/user/home/landingpage'])
        }
      })
    }  
  }
}
