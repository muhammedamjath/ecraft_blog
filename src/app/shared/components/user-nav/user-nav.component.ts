import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Authservice } from '../../../core/auth/authService.service';
import { UserService } from '../../../features/user/userService.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent implements OnInit {
  name: any = '';
  email: any = '';
  imageUrl:string = ''
  openSideBar: boolean = false;
  openMenubar: boolean = false;
  screenSize: string = '';

  profileForm!: FormGroup;
  isProfileModalOpen: boolean = false;
  submitted: boolean = false;
  selectedFile: File | null = null;

  constructor(
    private authService: Authservice,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userService.getUserData().subscribe((res) => {
      console.log(res);
      
      this.name = res.name;
      this.email = res.email;
      this.imageUrl = res.image
    });
    this.checkScreenSize();
    this.profileFormFn(); 
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 576) {
        this.checkScreenSize();
        this.screenSize = 'xs'; 
      } else if (width < 768) {
        this.checkScreenSize();
        this.screenSize = 'sm';
      } else if (width < 992) {
        this.checkScreenSize();
        this.screenSize = 'md';
      } else {
        this.checkScreenSize();
        this.screenSize = 'lg';
      }
    }
  }

  checkScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 992) {
      this.onScreenSizeLessThanLg();
    } else if (screenWidth >= 992) {
      this.onScreenSizeLargerThanLg();
    }
  }

  onScreenSizeLessThanLg() {
    this.screenSize = 'sm';
    this.openSideBar = false;
    this.openMenubar = true;
  }

  onScreenSizeLargerThanLg() {
    this.screenSize = 'lg';
    this.openSideBar = true;
    this.openMenubar = false;
  }

  open() {
    this.openSideBar = !this.openSideBar;
    this.openMenubar = !this.openMenubar;
  }

  logout() {
    this.authService.logOut();
  }


  profileFormFn() {
    this.profileForm = this.formBuilder.group({
      name: [this.name, [Validators.required]],
      email: [this.email, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      image: [null]
    });
  }

  openProfileModal() {
    this.isProfileModalOpen = true;
    this.submitted = false;
    this.profileFormFn(); 
  }

  closeProfileModal() {
    this.isProfileModalOpen = false;
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;
      this.profileForm.patchValue({
        image: file
      });
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }else{

        const userData = new FormData()

    if(this.selectedFile){
      userData.append('image',this.selectedFile)
    }
    userData.append('name',this.profileForm.value.name)
    userData.append('email',this.profileForm.value.email)
    userData.append('password',this.profileForm.value.password)

    this.authService.updateUserData(userData).subscribe((res)=>{

      this.closeProfileModal();
    })


  }
    }

    
}
